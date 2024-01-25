import "./styles/Problem.css";
const Problem = ({ darkmode }) => {
  const titles = `shadow-md p-3 rounded-md font-bold text-md h-[7vh] border-l-4 border-r-4 ${
    darkmode
      ? "bg-slate-600 text-white border-emerald-400"
      : "bg-slate-200 text-black border-cyan-400"
  }`;
  const show = `problemStatement  my-2 p-3 rounded-md text-sm shadow-xl  ${
    darkmode ? "bg-slate-600 text-white" : "bg-slate-200 text-black"
  }`;
  return (
    <div className="flex-col h-full justify-center">
      <h3 className={titles}>Problem Statement:</h3>
      <div className={show + "  h-[30vh] "}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut saepe
        doloribus, eum facere sunt sequi ducimus molestiae asperiores vitae
        harum minima consectetur eius impedit quisquam et possimus totam
        provident placeat. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Maiores ad eveniet deserunt totam magni odio maxime accusantium,
        voluptatum, labore nesciunt asperiores laudantium doloribus aut
        aspernatur cum quibusdam recusandae dolor ipsam.
      </div>
      <h3 className={titles}>Sample Input:</h3>
      <div className={show + " h-[8vh]"}>{"n = 6 arr[] = {1,2,3,4,5,6}"}</div>
      <h3 className={titles}>Sample Output:</h3>
      <div className={show + " h-[8vh]"}>{"6 1 5 2 4 3"}</div>
      <h3 className={titles}>Explanation:</h3>
      <div className={show + " h-[10vh]"}>
        {
          "Max element = 6, min = 1,second max = 5, second min = 2, and so on... Modified array is : 6 1 5 2 4 3."
        }
      </div>
    </div>
  );
};

export default Problem;
