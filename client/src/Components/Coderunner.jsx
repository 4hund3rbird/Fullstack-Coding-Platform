const Coderunner = ({ runcode, output, accent, handlesubmit }) => {
  return (
    <div className="h-[50vh] overflow-hidden">
      <div className="flex justify-end gap-4 my-2">
        <button className={"rounded p-2 text-xs font-bold" + accent}>
          Run Testcases
        </button>
        <button
          onClick={() => {
            runcode();
          }}
          className={"rounded p-2 text-xs font-bold" + accent}
        >
          Run Code
        </button>
        <button
          className={"rounded p-2 text-xs font-bold" + accent}
          onClick={() => {
            handlesubmit();
          }}
        >
          Submit
        </button>
      </div>

      <div className="output my-2 h-[35vh] bg-slate-950 rounded-md text-xl font-bold p-6 text-neutral-100 overflow-y-scroll no-scrollbar">
        {output}
      </div>
    </div>
  );
};

export default Coderunner;
