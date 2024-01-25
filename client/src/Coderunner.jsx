const Coderunner = ({ runcode, output, accent }) => {
  return (
    <div className="h-[50vh] overflow-hidden">
      <div className="flex justify-end gap-4 my-2">
        <button
          onClick={() => {
            runcode();
          }}
          className={"rounded p-2 text-xs font-bold" + accent}
        >
          Run Code
        </button>
        <button className={"rounded p-2 text-xs font-bold" + accent}>
          Submit
        </button>
      </div>

      <div className="output my-2 h-[35vh] bg-slate-950 rounded-md text-xl font-bold p-6 text-neutral-100 overflow-y-scroll">
        {output}
      </div>
    </div>
  );
};

export default Coderunner;
