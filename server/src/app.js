import express from "express";
import cors from "cors";

import bodyParser from "body-parser";
const port = process.env.PORT || 3000;
import { exec } from "child_process";

import { filepath, filewrite } from "./fileutilities.js";

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`listing on port : ${port}`);
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
      res.send({ output: stdout });
    });
  } else if (language == "cpp" || language == "c") {
    exec(command + filePath + " -o " + filepath(folderPath, "run"), (error) => {
      if (error) {
        console.log(error);
      } else {
        exec(filepath(folderPath, "run"), (error, stdout, stderr) => {
          res.send({ output: stdout });
        });
      }
    });
  } else if (language == "java") {
    exec(command + filePath, () => {
      exec("java -cp ./Temp/ temp", (error, stdout) => {
        if (error) {
          console.log(error);
        } else {
          res.send({ output: stdout });
        }
      });
    });
  }
});

app.get("/test", (req, res) => {
  const testStrings = [
    "Hello, world!",
    "This is a test string.",
    "12345",
    "Testing 1, 2, 3.",
    "Lorem ipsum dolor sit amet.",
    "🚀 Testing emojis! 😊🎉",
    "Coding is fun!",
    "Array of test strings.",
    "Node.js is awesome!",
    "Testing JavaScript code.",
    "OpenAI GPT-3 is amazing!",
    "Programming is an art.",
    "2023-01-01",
    "Random test string.",
    "Let's code together!",
    "123abc",
    "Testing special characters: !@#$%^&*()_+-=[]{}|;':,.<>/?",
    "Strings and more strings.",
    "Check if this works!",
    "The quick brown fox jumps over the lazy dog.",
    "Testing string manipulation.",
    "End of test strings.",
  ];
  res.send(testStrings);
});
