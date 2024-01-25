import { useState } from "react";
import Codeeditor from "./Codeeditor";
import Problem from "./Problem";
import "./styles/App.css";
import "./index.css";
import Navbar from "./Navbar";

const App = () => {
  const [code, setCode] = useState('console.log("hello world")');
  const [darkmode, setdarkmode] = useState(false);
  const handleChangeCode = (code) => {
    // console.log(code);
    setCode(code);
  };
  const accent_clr = `${darkmode ? " bg-emerald-400" : " bg-cyan-400"}`;
  const innerclass = `w-[50%] h-full p-4 rounded-md overflow-hidden ${
    darkmode ? "bg-slate-700" : "bg-slate-300"
  }`;
  return (
    <div
      className={`w-full border-2 gap-1 py-2 px-4 border-black h-[100vh]  flex justify-center ${
        darkmode ? "bg-slate-800" : "bg-slate-400"
      }`}
    >
      <div
        className={`w-[7%] h-full p-3 py-4 rounded-md overflow-hidden ${
          darkmode ? "bg-slate-700" : "bg-slate-300"
        }`}
      >
        <Navbar darkmode={darkmode} accent={accent_clr} />
      </div>
      <div className={innerclass}>
        <Problem darkmode={darkmode} accent={accent_clr} />
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
