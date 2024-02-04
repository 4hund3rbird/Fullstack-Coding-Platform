import "../styles/Problem.css";

const Problem = ({ darkmode, question }) => {
  const titles = `shadow-md p-3 rounded-md underline font-bold text-lg  h-[7vh] border-l-4 border-r-4 ${
    darkmode
      ? "bg-slate-600 text-white border-emerald-400"
      : "bg-slate-200 text-black border-cyan-400"
  }`;

  const show = `problemStatement my-2 p-3 rounded-md text-lg shadow-xl     ${
    darkmode ? "bg-slate-600 text-white " : "bg-slate-200 text-black "
  }`;

  return (
    <div className="flex-col h-full justify-center">
      <h3 className={titles}>Problem Statement:</h3>
      <div className={show + "  h-[20vh]  "}>
        {`${question.title} : ${question.question}`}
      </div>
      <h3 className={titles}>Sample Input:</h3>
      <div className={show + " h-[8vh]"}>{question.sample_input}</div>
      <h3 className={titles}>Sample Output:</h3>
      <div className={show + " h-[8vh]"}>{question.sample_output}</div>
      <h3 className={titles}>Explanation:</h3>
      <div className={show + " h-[20vh]"}>{question.explanation}</div>
    </div>
  );
};

export default Problem;
