import { useState } from "react";
import Codeeditor from "./Codeeditor";
import Problem from "./Problem";
import "./styles/App.css";

const App = () => {
  const [code, setCode] = useState('print("hello world")');
  const handleChangeCode = (code) => {
    // console.log(code);
    setCode(code);
  };
  return (
    <div className="main-container">
      <div className="container">
        <Problem />
      </div>
      <div className="container">
        <Codeeditor code={code} handleChangeCode={handleChangeCode} />
      </div>
    </div>
  );
};

export default App;
