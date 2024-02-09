import Editor from "@monaco-editor/react";
import axios from "axios";
import "../styles/Editor.css";
import Coderunner from "./Coderunner";

import { useState } from "react";
import Progressbar from "./Progressbar";

const Codeeditor = ({
  handleChangeCode,
  code,
  darkmode,
  setdarkmode,
  accent,
  changelanguage,
  handlesubmit,
  id,
  prevoutput,
  prevlanguage,
  sampleoutput,
  sampleinput,
}) => {
  const [iscoderunning, setiscoderunning] = useState(false);

  const port = "3000";
  // const IP_home = "192.168.52.205";
  // const IP_office = "192.168.29.215";
  const IP = "";
  // const templates = {
  //   python: 'print("Hello World")',
  //   javascript: 'console.log("Hello world");',
  //   cpp: '#include<iostream>\nusing namespace std;\nint main(){\n\ncout<<"Hello world"<<endl;  \nreturn 0;}',
  //   c: '#include<stdio.h>\nint main(){\nprintf("Hello world");}',
  //   java: 'public class temp\n{\n  public static void main(String[] args) {\n    System.out.println("Hello World!");\n}\n}',
  // };

  const runcode = () => {
    setiscoderunning(true);
    axios
      .post(`http://${IP ? IP : "localhost"}:${port}/runcode`, {
        code: code,
        language: prevlanguage,
      })
      .then((res) => {
        const { output } = res.data;

        handleChangeCode(code, id, output);

        setiscoderunning(false);
      });
  };

  return (
    <div className="flex-col">
      <div className="h-[50vh] overflow-hidden">
        <div className="flex justify-between my-1">
          <button
            onClick={() => {
              setdarkmode(!darkmode);
            }}
            className={"rounded p-2 text-xs font-bold" + accent}
          >
            {!darkmode ? "DarkMode" : "LightMode"}
          </button>
          <div>
            <Progressbar size={id} totalques={4} darkmode={darkmode} />
          </div>
          {/* <button
            className={`rounded-lg py-2 px-6 text-xs font-bold cursor-default border-2 ${
              darkmode
                ? "bg-slate-600 text-white border-emerald-400"
                : "bg-slate-200 text-black border-cyan-400"
            }`}
          >{`${Math.floor(time_sec / 60)} : ${time_sec / 30}`}</button> */}
          <select
            className={
              "language_select rounded p-2 text-xs  font-bold cursor-pointer" +
              accent
            }
            value={prevlanguage}
            onChange={(e) => {
              console.log(e.target.value);
              changelanguage(e.target.value, id);
            }}
          >
            <option value="python">Python</option>
            <option value="cpp">C++</option>
            <option value="c">C</option>
            <option value="javascript">Javascript</option>
            <option value="java">Java</option>
          </select>
        </div>
        <div className="h-full my-2">
          <Editor
            height={"100%"}
            defaultLanguage={""}
            defaultValue={code}
            onChange={(e) => {
              console.log(e, id);
              handleChangeCode(e, id);
            }}
            theme={darkmode && "vs-dark"}
            value={code}
            options={{ language: " ", fontSize: "15px" }}
          />
        </div>
      </div>

      <div className="runner">
        <Coderunner
          accent={accent}
          output={iscoderunning ? "Loading...." : prevoutput}
          runcode={runcode}
          handlesubmit={handlesubmit}
          sampleoutput={sampleoutput}
          sampleinput={sampleinput}
          darkmode={darkmode}
        />
      </div>
    </div>
  );
};

export default Codeeditor;
