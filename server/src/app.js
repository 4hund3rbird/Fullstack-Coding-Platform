import express from "express";
import cors from "cors";
import questions from "./questions.js";
import bodyParser from "body-parser";
const port = process.env.PORT || 3000;
import { exec } from "child_process";
import * as fs from "fs";
import { filepath, filewrite } from "./fileutilities.js";

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`listing on port : ${port}`);
});

app.get("/questions", (req, res) => {
  res.send(questions);
});

app.get(`/random_questions/:no`, (req, res) => {
  const no = parseInt(req.params.no);
  let random_ques = [];
  while (random_ques.length < no) {
    let random_question =
      questions[Math.floor(Math.random() * questions.length)];
    if (random_ques.includes(random_question) == false) {
      random_ques.push(random_question);
    }
  }
  res.send(random_ques);
});

app.post("/submit", (req, res) => {
  const { username, email, testcase, code, output } = req.body;
  const ans = JSON.stringify(code);
  for (let i in code) {
    fs.writeFileSync(
      `../Question${i}.py`,
      `'''${code[i].question}'''\n${code[i].code}\n\n#output --> \n\n'''${code[i].output}'''`
    );
  }
  fs.writeFileSync(`../${username}.js`, `//${username}\n//${email}\n${ans}`);
});

app.post("/runcode", (req, res) => {
  const { code, language } = req.body;
  const folderPath = "./Temp";
  let fileName = "";
  let command = "";

  switch (language) {
    case "javascript":
      fileName = "temp.js";
      command = "node ";
      break;

    case "python":
      fileName = "temp.py";
      command = "python ";
      break;

    case "c":
      fileName = "temp.cpp";
      command = "g++ ";
      break;

    case "cpp":
      fileName = "temp.cpp";
      command = "g++ ";
      break;

    case "java":
      fileName = "temp.java";
      command = "javac ";
      break;
  }

  const filePath = filepath(folderPath, fileName);

  filewrite(filePath, code);

  // console.log("Received data:", code, language);
  if (language == "python" || language == "javascript") {
    exec(command + filePath, (error, stdout, stderr) => {
      if (error) {
        res.send({ output: stderr });
      } else {
        res.send({ output: stdout });
      }
    });
  } else if (language == "cpp" || language == "c") {
    exec(
      command + filePath + " -o " + filepath(folderPath, "run"),
      (error, stderr) => {
        if (error) {
          res.send({ output: stderr });
        } else {
          exec(filepath(folderPath, "run"), (error, stdout, stderr) => {
            if (error) {
              res.send({ output: stderr });
            } else {
              res.send({ output: stdout });
            }
          });
        }
      }
    );
  } else if (language == "java") {
    exec(command + filePath, () => {
      exec("java -cp ./Temp/ temp", (error, stdout, stderr) => {
        if (error) {
          res.send({ output: stderr });
        } else {
          res.send({ output: stdout });
        }
      });
    });
  }
});
