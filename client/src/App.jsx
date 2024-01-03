import { useState } from "react";
import Codeeditor from "./Codeeditor";
import Problem from "./Problem";
import "./styles/App.css";

const App = () => {
  const [code, setCode] = useState('console.log("hello world")');
  const handleChangeCode = (code) => {
    // console.log(code);
    setCode(code);
  };
  return (
    <div className="main-container">
      <div className="navbar container">
        <h4 className="title">Tech Amplifiers</h4>
        <h5 className="title">Questions</h5>
        <li>Que.1</li>
        <li>Que.2</li>
        <li>Que.3</li>
        <li>Que.4</li>
        <li>Que.5</li>
        <h3 className="title">Test Time</h3>
      </div>
      <div className="container left">
        <Problem />
      </div>
      <div className="container right">
        <Codeeditor code={code} handleChangeCode={handleChangeCode} />
      </div>
    </div>
  );
};

export default App;
