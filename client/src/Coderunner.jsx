const Coderunner = ({ runcode, output }) => {
  return (
    <>
      <div className="output-top">
        <button>Run Tests</button>
        <button
          onClick={() => {
            runcode();
          }}
        >
          Run Code
        </button>
      </div>
      <div className="output">{output}</div>
    </>
  );
};

export default Coderunner;
