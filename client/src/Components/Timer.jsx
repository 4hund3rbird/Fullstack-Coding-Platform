import { useState, useEffect } from "react";
const min = 10;
const time = 60 * min;
const Timer = ({ darkmode, handlesubmit }) => {
  const [secs, updatesecs] = useState(time);
  const [finished, setfinished] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      updatesecs((s) => {
        if (s === 0) {
          handlesubmit();
          setfinished(true);
          return s;
        } else {
          return s - 1;
        }
      });
    }, 1000);
    return () => clearInterval(id);
  }, [updatesecs, handlesubmit]);

  return (
    <div
      className={`shadow-xl rounded-xl p-1 h-[10vh] border-4 flex flex-col justify-center ${
        darkmode
          ? "bg-slate-600 text-white border-emerald-400"
          : "bg-slate-200 text-black border-cyan-400"
      }`}
    >
      <h1 className="m-auto font-semibold">
        {finished
          ? "Done"
          : `${Math.floor(secs / 60) < 10 ? "0" : ""}${Math.floor(secs / 60)}:${
              secs % 60 < 10 ? "0" : ""
            }${secs % 60}`}
      </h1>
    </div>
  );
};

export default Timer;
