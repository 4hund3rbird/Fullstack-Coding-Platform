const Navbar = ({ darkmode, accent, questions, qid, setqid, setque }) => {
  const selected_clr = `${
    darkmode ? " border-emerald-400" : " border-cyan-400"
  }`;
  const questions_cls = `shadow-xl rounded-xl p-4 font-bold my-4 text-center  border-4  ${
    darkmode ? "bg-slate-600 text-white " : "bg-slate-200 text-black "
  }`;
  return (
    <div className="flex flex-col gap-6">
      <img
        src="/logo.png"
        alt="logo"
        className={`shadow-xl rounded-xl p-1 h-[10vh] bg-white ${
          darkmode ? "bg-slate-600 text-white" : "bg-slate-200 text-black"
        }`}
      />
      <div
        className={`h-[80vh]  border-t-4 border-b-4 rounded-md overflow-scroll no-scrollbar flex flex-col justify-start  ${
          !darkmode ? "border-cyan-400" : "border-emerald-400"
        }`}
      >
        <ul>
          {questions.map((q, i) => {
            return (
              <li
                key={i}
                className={`
                  ${questions_cls} hover:cursor-pointer ${
                  i === qid ? selected_clr : " "
                }
                `}
                onClick={() => {
                  setqid(i);
                  setque(questions[i]);
                }}
              >
                Q{i + 1}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
