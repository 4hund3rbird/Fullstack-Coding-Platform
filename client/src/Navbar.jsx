const Navbar = ({ darkmode, accent }) => {
  const selected_clr = `${
    darkmode ? " border-emerald-400" : " border-cyan-400"
  }`;
  const questions = `shadow-xl rounded-xl p-4 font-bold my-4 text-center  border-4 ${
    darkmode ? "bg-slate-600 text-white" : "bg-slate-200 text-black"
  }`;
  return (
    <div>
      <img
        src="../public/logo.png"
        alt="logo"
        className={`shadow-xl rounded-xl p-1 ${
          darkmode ? "bg-slate-600 text-white" : "bg-slate-200 text-black"
        }`}
      />
      <ul>
        <li className={questions + selected_clr}>Q1</li>
        <li className={questions}>Q2</li>
        <li className={questions}>Q3</li>
        <li className={questions}>Q4</li>
        <li className={questions}>Q5</li>
        <li className={questions}>Q6</li>
        <li className={questions}>Q7</li>
        <li className={questions}>Q8</li>
      </ul>
    </div>
  );
};

export default Navbar;
