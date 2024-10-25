import React from "react";

function Banner({creditedMoney}) {


    const fixedMoney = 50000000;

  return (
    <div className="px-8">
      <div className="flex flex-col justify-center items-center text-center mt-4 bg-gray-950 bg-[url(../assets/bg-shadow.png)] bg-cover w-full rounded-md p-4">
        <img src="../assets/banner-main.png"></img>

        <div className="flex flex-col space-y-3 mt-5">
          <h1 className="text-3xl text-white font-bold">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <p className="text-xl font-semibold text-slate-200">
            Beyond Boundaries Beyond Limits
          </p>
          
        </div>

        {/* make button dynamic */}
        <button className="bg-green-500 px-3 py-3 shadow-md rounded-md text-xl font-semibold mt-4 border border-dotted" onClick={()=>creditedMoney(fixedMoney)}>
          Claim Free Credit
        </button>


      </div>
    </div>
  );
}

export default Banner;
