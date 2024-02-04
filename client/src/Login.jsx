import { useState } from "react";

const Login = ({ handlelogin, handledata }) => {
  const [fullname, setfullname] = useState("");
  const [email, setemail] = useState("");
  const show =
    "p-3  rounded  text-white text-lg font-bold  bg-slate-600  my-2  m-auto ";
  return (
    <div className="absolute p-4 top-0 h-screen w-full backdrop-blur-lg bg-[#00000091]  z-10 flex flex-col justify-center ">
      <div className="logincard p-4  h-[400px] rounded-xl w-[500px] m-auto flex flex-col justify-between border-2">
        <div className="p-4   rounded-xl">
          <img src="./longlogo.png" />
        </div>
        <div>
          <div className="text-center">
            <input
              type="text"
              value={fullname}
              onChange={(e) => {
                setfullname(e.target.value);
              }}
              placeholder={"Full Name"}
              className={
                show + " bg-transparent border-2 hover:bg-slate-600  w-80"
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
              handledata(fullname, email);
              handlelogin();
            }}
            className="rounded-lg p-4 text-lg font-bold border-2   hover:-translate-y-1 transition-all ease-in-out duration-2 my-2  hover:bg-gradient-to-tr hover:bg-cyan-600 hover:border-2 hover:border-slate-100 text-white"
          >
            Start Test
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
