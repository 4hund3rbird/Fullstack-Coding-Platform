import { useState, useEffect } from "react";
import Codeeditor from "./Components/Codeeditor";
import Problem from "./Components/Problem";
import axios from "axios";
import "./styles/App.css";
import "./index.css";
import Navbar from "./Components/Navbar";
import Login from "./Login";

const App = () => {
  const [code, setCode] = useState('print("Hello world")');
  const [darkmode, setdarkmode] = useState(false);
  const [loggedin, isloggedin] = useState(false);

  const [data, setdata] = useState({ fullname: "", email: "" });

  const [qid, setqid] = useState(0);
  const [questions, setquestions] = useState([]);
  const [question, setquestion] = useState({});

  useEffect(() => {
    axios.get("http://localhost:3000/random_questions/3").then((res) => {
      setquestion(res.data[qid]);
      setquestions(res.data);
    });
  }, []);

  const handledata = (fullname, email) => {
    setdata(() => {
      return { fullname: fullname, email: email };
    });
  };

  const handleChangeCode = (code) => {
    // console.log(code);
    setCode(code);
  };

  const handlelogin = () => {
    isloggedin(!loggedin);
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
          code={code}
          handleChangeCode={handleChangeCode}
          darkmode={darkmode}
          setdarkmode={setdarkmode}
        />
      </div>
    </div>
  );
};

export default App;
