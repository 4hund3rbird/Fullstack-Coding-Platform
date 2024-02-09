const Coderunner = ({
  runcode,
  output,
  accent,
  handlesubmit,
  sampleoutput,
  sampleinput,
  darkmode,
}) => {
  const show = `rounded-lg  flex flex-col justify-center h-min p-4 font-semibold ${
    darkmode ? "bg-slate-700 text-white" : "bg-slate-300 text-black"
  }`;
  return (
    <div className="h-[50vh] overflow-hidden">
      <div className="flex justify-end gap-4 my-2">
        {/* <button className={"rounded p-2 text-xs font-bold" + accent}>
          Run Testcases
        </button> */}
        <button
          onClick={() => {
            runcode();
          }}
          className={"rounded p-2 text-xs font-bold" + accent}
        >
          Run & Save Code
        </button>
        <button
          className={"rounded p-2 text-xs font-bold" + accent}
          onClick={() => {
            handlesubmit();
          }}
        >
          Submit Test
        </button>
      </div>

      <div
        className={
          "output my-2 h-[40vh] rounded-md text-xl font-bold p-6  overflow-y-scroll no-scrollbar " +
          `${
            darkmode
              ? "bg-slate-600 text-neutral-100"
              : "bg-slate-200 text-black"
          }`
        }
      >
        <div className="flex justify-between">
          <div className="w-[49%]">
            <h1 className="my-3">Sample Input:</h1>
            <div className={show}>{sampleinput}</div>
          </div>
          <div className="w-[49%]">
            <h1 className="my-3">Sample Output:</h1>
            <div className={show}>{sampleoutput}</div>
          </div>
        </div>
        <div>
          <h1 className="my-3">
            Your Output:
            {output &&
              (sampleoutput === output.trim()
                ? "   Passed ✅ 😁"
                : "   Failed ❌ 😨")}
          </h1>
          <div
            className={
              "rounded-lg min-h-16 p-4 font-semibold " +
              `${
                darkmode
                  ? "bg-slate-700 text-neutral-100"
                  : "bg-slate-300 text-black"
              }`
            }
          >
            {output}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coderunner;
