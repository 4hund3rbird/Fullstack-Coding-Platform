import Editor from "@monaco-editor/react";
import "./styles/Editor.css";
import Coderunner from "./Coderunner";
import { useState, useEffect } from "react";

const Codeeditor = ({ handleChangeCode, code }) => {
  const [darkmode, setdarkmode] = useState(false);
  const [language, setlanguage] = useState("python");
  const [iscoderunning, setiscoderunning] = useState(false);

  const [output, setoutput] = useState("");

  return (
    <div className="editor-setup">
      <div className="top">
        <button
          onClick={() => {
            setdarkmode(!darkmode);
          }}
        >
          DarkMode
        </button>
        <select
          value={language}
          onChange={(e) => {
            console.log(e.target.value);
            setlanguage(e.target.value);
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
        defaultLanguage={language}
        defaultValue="// some comment"
        onChange={(e) => {
          console.log(e);
          handleChangeCode(e);
        }}
        theme={darkmode && "vs-dark"}
        value={code}
      />
      <div className="runner">
        <Coderunner runcode={setiscoderunning} />
      </div>
    </div>
  );
};

export default Codeeditor;
