import React from "react";

function Header({ credit }) {
  console.log("header", credit);
  return (
    <div className="px-8 mt-4">
      <div>
        <div className="flex justify-between bg-transparent md:backdrop-blur-sm sticky top-0 border">
          <div className="md:w-full w-30">
            <img src="../assets/logo.png" />
          </div>

          <div className="flex md:space-x-8">
            <p>Home</p>
            <p>Fixture</p>
            <p>Teams</p>
            <p>Schedules</p>
            {/* make here dynamic button */}
            <div className="border-2 border-dotted flex space-x-1 ">
              <p className="font-bold"> {credit} </p>
              <i class="ri-coins-line"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
