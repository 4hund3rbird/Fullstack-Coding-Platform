const Coderunner = ({ runcode, output }) => {
  return (
    <>
      <div className="output-top">
        <button className="buttons_design">Run Tests</button>
        <button
          onClick={() => {
            runcode();
          }}
          className="buttons_design"
        >
          Run Code
        </button>
      </div>
      <div className="output">{output}</div>
    </>
  );
};

export default Coderunner;
