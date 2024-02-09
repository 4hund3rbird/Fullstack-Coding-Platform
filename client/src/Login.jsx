import { useState } from "react";

const Login = ({ handlelogin }) => {
  const [fullname, setfullname] = useState(function () {
    return localStorage.getItem("fullname");
  });
  const [email, setemail] = useState(function () {
    localStorage.getItem("email");
  });
  const show =
    "p-3  rounded  text-emerald-400 text-lg border-emerald-400 font-bold  bg-slate-600  my-2  m-auto ";
  return (
    <div className="absolute p-4 top-0 h-screen w-full backdrop-blur-lg bg-[#00000091]  z-10 flex flex-col justify-center ">
      <div className="logincard p-4  h-[400px] rounded-xl w-[500px] m-auto flex flex-col justify-evenly border-2 bg-slate-800 border-emerald-400">
        <div>
          <div className="font-extrabold text-4xl text-center p-4 rounded-md text-emerald-400 ">
            <h1>Enter your details.</h1>
          </div>
          <div className="text-center">
            <input
              type="text"
              value={fullname}
              onChange={(e) => {
                setfullname(e.target.value);
              }}
              placeholder={"Full Name"}
              className={
                show + " bg-transparent border-2  hover:bg-slate-600  w-80"
              }
            />
          </div>
          <div className="text-center">
            <input
              type="text"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
              placeholder={"Email Address"}
              className={
                show + " bg-transparent border-2 hover:bg-slate-600 w-80"
              }
            />
          </div>
        </div>
        <div className="text-center h-20 ">
          <button
            onClick={() => {
              if (fullname && email) {
                localStorage.setItem("fullname", fullname);
                localStorage.setItem("email", email);
                handlelogin();
              }
            }}
            className="rounded-lg p-4 text-lg font-bold border-2   hover:-translate-y-1 transition-all border-emerald-400 ease-in-out duration-2 my-2  hover:bg-gradient-to-tr hover:bg-emerald-400 bg-slate-700 hover:border-2 hover:border-emerald-400 hover:text-black text-emerald-400"
          >
            Start Test
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
