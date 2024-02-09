import { useState, useEffect } from "react";
import Codeeditor from "./Components/Codeeditor";
import Problem from "./Components/Problem";
import axios from "axios";
import "./styles/App.css";
import "./index.css";
import Navbar from "./Components/Navbar";
import Login from "./Login";
import Submitscreen from "./Components/Submitscreen";

// const IP_home = "192.168.52.205";
// const IP_office = "192.168.29.215";
const IP = "";

const App = () => {
  const no_of_questions = 4;
  const [code, setCode] = useState(function () {
    return Array.from({ length: no_of_questions }, (e, i) => ({
      id: i,
      question: "",
      title: "",
      code: `#Write code for question no ${i + 1} \n`,
      output: "",
      sampleoutput: "",
      sampleinput: "",
      language: "python",
    }));
  });

  console.log(code);
  const [darkmode, setdarkmode] = useState(function () {
    if (JSON.parse(localStorage.getItem("darkmode"))) {
      return JSON.parse(localStorage.getItem("darkmode"));
    } else {
      return false;
    }
  });

  const [loggedin, isloggedin] = useState(function () {
    return JSON.parse(localStorage.getItem("login"));
  });

  // const [data, setdata] = useState({ fullname: "", email: "" });
  const [submit, setsubmit] = useState(function () {
    return JSON.parse(localStorage.getItem("submit"));
  });
  const [qid, setqid] = useState(0);
  const [questions, setquestions] = useState([]);
  const [question, setquestion] = useState({});

  useEffect(() => {
    axios
      .get(
        `http://${
          IP ? IP : "localhost"
        }:3000/random_questions/${no_of_questions}`
      )
      .then((res) => {
        setquestions(res.data);
        setquestion(res.data[0]);
        console.log(res.data);
        setCode((l) => {
          return l.map((e, i) => {
            const x = res.data[i].title.split(" ");
            const name = x.reduce((a, b) => a + b);
            return {
              ...e,
              question: res.data[i].question,
              title: res.data[i].title,
              code: `def ${name}(input):\n\t#write your code here and return the output\n\n\n\n\n\n\n\n\n\n#do not change this code\nif __name__=='__main__':\n\tinput=${res.data[i].sample_input}\n\tans=${name}(input)\n\tprint(ans)`,
              sampleoutput: res.data[i].sample_output,
              sampleinput: res.data[i].sample_input,
            };
          });
        });
      });
  }, []);

  useEffect(() => {
    setquestion[questions[qid]];
  }, [qid, questions]);

  useEffect(() => {
    localStorage.setItem("darkmode", JSON.stringify(darkmode));
  }, [darkmode]);

  const handlesubmit = () => {
    setsubmit(true);
    localStorage.setItem("submit", JSON.stringify(true));
    axios
      .post(`http://${IP ? IP : "localhost"}:3000/submit`, {
        username: localStorage.getItem("fullname"),
        email: localStorage.getItem("email"),
        tescase: true,
        code: code,
      })
      .then((res) => {
        console.log(res);
      });
  };

  // const handledata = (fullname, email) => {
  //   setdata(() => {
  //     return { fullname: fullname, email: email };
  //   });
  // };

  const handleChangeCode = (code, id, output) => {
    setCode((codelist) => {
      return codelist.map((e, i) => {
        if (i === id) {
          return {
            ...e,
            id: i,
            code: code,
            output: output,
          };
        } else {
          return e;
        }
      });
    });
  };

  const handlelanguagechange = (language, id) => {
    setCode((codelist) => {
      return codelist.map((e, i) => {
        if (i === id) {
          return {
            ...e,
            language: language,
          };
        } else {
          return e;
        }
      });
    });
  };

  const handlelogin = () => {
    isloggedin(true);
    localStorage.setItem("login", JSON.stringify(true));
  };
  const accent_clr = `${darkmode ? " bg-emerald-400" : " bg-cyan-400"}`;
  const innerclass = `w-[50%] h-full p-4 rounded-md overflow-hidden ${
    darkmode ? "bg-slate-700" : "bg-slate-300"
  }`;
  return (
    <div
      className={`w-full  gap-1 py-2 px-4  h-[100vh]  flex justify-center ${
        darkmode ? "bg-slate-800" : "bg-slate-400"
      }`}
    >
      {!loggedin && <Login handlelogin={handlelogin} />}
      {submit && <Submitscreen darkmode={darkmode} />}

      <div
        className={`w-[7%] h-full p-3 py-4 rounded-md overflow-hidden ${
          darkmode ? "bg-slate-700" : "bg-slate-300"
        }`}
      >
        <Navbar
          darkmode={darkmode}
          accent={accent_clr}
          qid={qid}
          setqid={setqid}
          setque={setquestion}
          questions={questions}
          handlesubmit={handlesubmit}
          login={loggedin}
        />
      </div>
      <div className={innerclass}>
        <Problem darkmode={darkmode} accent={accent_clr} question={question} />
      </div>
      <div className={innerclass}>
        <Codeeditor
          accent={accent_clr}
          code={code[qid].code}
          sampleoutput={code[qid].sampleoutput}
          prevoutput={code[qid].output}
          id={qid}
          handleChangeCode={handleChangeCode}
          darkmode={darkmode}
          setdarkmode={setdarkmode}
          handlesubmit={handlesubmit}
          prevlanguage={code[qid].language}
          changelanguage={handlelanguagechange}
          sampleinput={code[qid].sampleinput}
        />
      </div>
    </div>
  );
};

export default App;
