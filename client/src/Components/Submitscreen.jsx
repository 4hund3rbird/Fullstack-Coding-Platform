const Submitscreen = () => {
  const fullname = localStorage.getItem("fullname");
  const email = localStorage.getItem("email");
  return (
    <div className="absolute p-4 top-0 h-screen w-full backdrop-blur-lg bg-[#00000091]  z-10 flex flex-col justify-center ">
      <div className="logincard p-6 bg-slate-800  h-[400px] rounded-xl w-[500px] m-auto text-emerald-400  border-2 border-emerald-400 flex flex-col justify-center">
        <h1 className="font-extrabold text-4xl text-center p-4 rounded-md  ">
          You have successfully submitted the test.
        </h1>
        <div className="rounded-xl bg-slate-700 w-full h-full p-6 flex flex-col justify-evenly">
          <h1 className="border-2 border-emerald-400 rounded-xl font-semibold text-2xl p-4 flex">
            FullName : {fullname}
          </h1>
          <h1 className="border-2 border-emerald-400 rounded-xl font-semibold text-2xl p-4 flex">
            Email: {email}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Submitscreen;
