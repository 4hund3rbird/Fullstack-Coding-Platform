import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

const Progressbar = ({ size, totalques, darkmode }) => {
  const ele1 = useRef(null);
  const ele2 = useRef(null);

  function returnfill(currentsize, totalsize, totalpixels) {
    const percentage = (currentsize * 100) / totalsize;
    const currentpixels = (percentage * totalpixels) / 100;
    return currentpixels;
  }

  useEffect(() => {
    ele1.current.style.width = `${parseInt(
      returnfill(size + 1, totalques, 400)
    )}px`;
  }, [size, totalques]);

  return (
    <div className="w-fit flex gap-3 m-auto p-2">
      <div
        ref={ele2}
        className={`border-2 ${
          darkmode
            ? "bg-slate-600 border-emerald-400"
            : "bg-slate-200 border-cyan-400"
        } rounded-full overflow-clip w-[400px] h-5`}
      >
        <div
          ref={ele1}
          className={`bg-gradient-to-r transition-all duration-500 ease-out ${
            darkmode
              ? "from-teal-600 to-emerald-400"
              : "from-sky-600 to-cyan-400"
          }  h-full rounded-full text-right px-2 py-1 font-semibold flex flex-col justify-center`}
        >
          {/* {progress}% */}
        </div>
      </div>
    </div>
  );
};

Progressbar.propTypes = {
  size: PropTypes.number,
  points: PropTypes.number,
  totalpoints: PropTypes.number,
  totalques: PropTypes.number,
};

export default Progressbar;
