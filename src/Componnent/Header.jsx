import React from "react";
import { toast } from "react-toastify";

function Header({ credit }) {
  console.log("header", credit);

  const menu = ()=>{
    toast.done("hey iam busy!")
  }
  return (
    <div className=" mt-4 backdrop-blur-md bg-transparent sticky top-0">
      <div className=" ">
        <div className="flex justify-between bg-transparent backdrop-blur-md  sticky top-0 ">
          <div className="md:w-full w-30">
            <img src="../assets/logo.png" className="md:h-12" />
          </div>

          <div className="flex md:space-x-8 mr-4 ">
            <div className="flex space-x-5 md:visible invisible">
              <p className="md:text-xl">Home</p>
              <p className="md:text-xl">Fixture</p>
              <p className="md:text-xl">Teams</p>
              <p className="md:text-xl">Schedules</p>
            </div>

            <div className="md:invisible visible" >
              <i class="ri-menu-line text-xl mr-3" onClick={menu}></i>
            </div>

            {/* make here dynamic button */}
            <div className="  flex space-x-1 ml-2">
              <p className="font-bold"> {credit} </p>
              <i class="ri-coins-line  text-red-400"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
