const Submitscreen = () => {
  return (
    <div className="absolute p-4 top-0 h-screen w-full backdrop-blur-lg bg-[#00000091]  z-10 flex flex-col justify-center ">
      <div className="logincard p-4  h-[400px] rounded-xl w-[500px] m-auto  border-2">
        <div className="p-4   rounded-xl">
          <img src="./longlogo.png" />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="font-extrabold text-4xl text-center p-4 rounded-md  text-white">
            You have successfully submitted the test.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Submitscreen;
