import Editor from "@monaco-editor/react";
import axios from "axios";
import "./styles/Editor.css";
import Coderunner from "./Coderunner";
import { useState, useEffect } from "react";

const Codeeditor = ({ handleChangeCode, code }) => {
  const [darkmode, setdarkmode] = useState(false);
  const [language, setlanguage] = useState("javascript");
  const [iscoderunning, setiscoderunning] = useState(false);
  const [output, setoutput] = useState("");

  const templates = {
    python: 'print("Hello World")',
    javascript: 'console.log("Hello world");',
    cpp: '#include<iostream>\nusing namespace std;\nint main(){\n\ncout<<"Hello world"<<endl;  \nreturn 0;}',
    c: '#include<stdio.h>\nint main(){\nprintf("Hello world");}',
    java: 'public class temp\n{\n  public static void main(String[] args) {\n    System.out.println("Hello World!");\n}\n}',
  };

  useEffect(() => {
    axios.get("http://localhost:3000/test").then((res) => {
      console.log(res.data);
    });
  }, []);

  const runcode = () => {
    setiscoderunning(true);
    axios
      .post("http://localhost:3000/runcode", { code: code, language: language })
      .then((res) => {
        const { output } = res.data;
        console.log(output);
        setoutput(output);
        setiscoderunning(false);
      });
  };

  return (
    <div className="editor-setup">
      <div className="top">
        <button
          onClick={() => {
            setdarkmode(!darkmode);
          }}
          className="buttons_design"
        >
          DarkMode
        </button>
        <select
          value={language}
          onChange={(e) => {
            console.log(e.target.value);
            setlanguage(e.target.value);
            setoutput("");
            handleChangeCode(templates[e.target.value]);
          }}
        >
          <option value="python">python</option>
          <option value="cpp">c++</option>
          <option value="c">c</option>
          <option value="javascript">javascript</option>
          <option value="java">java</option>
        </select>
      </div>

      <Editor
        height={"50%"}
        className={`editor `}
        defaultLanguage={""}
        defaultValue={code}
        onChange={(e) => {
          console.log(e);
          handleChangeCode(e);
        }}
        theme={darkmode && "vs-dark"}
        value={code}
        options={{ language: " " }}
      />

      <div className="runner">
        <Coderunner
          output={iscoderunning ? "Loading...." : output}
          runcode={runcode}
        />
      </div>
    </div>
  );
};

export default Codeeditor;
