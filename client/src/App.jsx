import { useState, useEffect } from "react";
import Codeeditor from "./Components/Codeeditor";
import Problem from "./Components/Problem";
import axios from "axios";
import "./styles/App.css";
import "./index.css";
import Navbar from "./Components/Navbar";
import Login from "./Login";
import Submitscreen from "./Components/Submitscreen";

const App = () => {
  const no_of_questions = 3;
  const [code, setCode] = useState(function () {
    return Array.from({ length: no_of_questions }, (e, i) => ({
      id: i,
      question: "",
      title: "",
      code: `#Write code for question no ${i + 1}`,
      output: "",
      language: "python",
    }));
  });

  console.log(code);
  const [darkmode, setdarkmode] = useState(function () {
    return JSON.parse(localStorage.getItem("darkmode"));
  });

  const [loggedin, isloggedin] = useState(function () {
    return JSON.parse(localStorage.getItem("login"));
  });

  const [data, setdata] = useState({ fullname: "", email: "" });
  const [submit, setsubmit] = useState(function () {
    return JSON.parse(localStorage.getItem("submit"));
  });
  const [qid, setqid] = useState(0);
  const [questions, setquestions] = useState([]);
  const [question, setquestion] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3000/random_questions/${no_of_questions}`)
      .then((res) => {
        setquestions(res.data);
        setquestion(res.data[0]);
        console.log(res.data);
        setCode((l) => {
          return l.map((e, i) => {
            return {
              ...e,
              question: res.data[i].question,
              title: res.data[i].title,
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
      .post("http://localhost:3000/submit", {
        username: data.fullname,
        email: data.email,
        tescase: true,
        code: code,
      })
      .then((res) => {
        console.log(res);
      });
  };

  const handledata = (fullname, email) => {
    setdata(() => {
      return { fullname: fullname, email: email };
    });
  };

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
    isloggedin(!loggedin);
    localStorage.setItem("login", JSON.stringify(!loggedin));
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
      {!loggedin && <Login handlelogin={handlelogin} handledata={handledata} />}
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
        />
      </div>
      <div className={innerclass}>
        <Problem darkmode={darkmode} accent={accent_clr} question={question} />
      </div>
      <div className={innerclass}>
        <Codeeditor
          accent={accent_clr}
          code={code[qid].code}
          prevoutput={code[qid].output}
          id={qid}
          handleChangeCode={handleChangeCode}
          darkmode={darkmode}
          setdarkmode={setdarkmode}
          handlesubmit={handlesubmit}
          prevlanguage={code[qid].language}
          changelanguage={handlelanguagechange}
        />
      </div>
    </div>
  );
};

export default App;
