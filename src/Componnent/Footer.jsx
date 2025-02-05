import React from "react";

function Footer() {
  return (
    <div className="  mt-20  rounded-md  ">
      <div className="w-3/4  bg-cover  text-center p-8  rounded-md bg-gradient-to-l from-red-400 to-pink-200  absolute  md:ml-28 border-2 md:p-10 shadow-xl ml-12  ">
        <div>
          <h1 className="text-2xl font-semibold">
            Subscribe to our Newsletter
          </h1>
          <p className="text-xl font-semibold text-gray-500">
            Get the latest updates and news right in your inbox!
          </p>
        </div>

        <div className="md:flex-row space-x-2 justify-center items-center ">
          <input
            type="text"
            placeholder="Enter your email"
            className="border-2 rounded-md px-3 py-2"
          />

          <button className="px-3 md:px-6 bg-green-500 md:py- py-2 rounded-md text-xl text-white font-normal">
            Subscribe
          </button>
        </div>
      </div>
      <br></br>
      {/* nxt part */}

      <div className="bg-gray-950  rounded-md md:mt-10 p-10 mt-20">

        <div className=" flex justify-center items-center md:mt-32 mt-36">
          <img src="../assets/banner-main.png" className="h-32" />
        </div>

        <section className="text-white p-4 md:flex justify-between text-center space-y-8">
          <div className="space-y-2 mt-8">
            <h2>About us</h2>
            <p className="mt-4">
              We are a passionate team <br></br>dedicated to providing the best{" "}
              <br></br>services to our customers.
            </p>
          </div>
          <div className="flex flex-col ">
            <h2 className="mt-3" >Quick Link</h2>
            <p className="mb-2 ">Home</p>
            <p className="mb-2">Services</p>
            <p className="mb-2">About</p>
            <p className="mb-2">Contact</p>
          </div>
          <div>
            <div>
              <h2>Subscribe</h2>
              <p>Subscribe to our newsletter for the latest updates.</p>
            </div>

            <div className="flex justify-center space-x-3  mt-3">
              <input
                type="text"
                placeholder="Enter your Email"
                className="rounded-md text-center"
              />
              <button className="px-2 py-2 text-center rounded-md bg-green-500">
                Subcribe
              </button>
            </div>
          </div>
        </section>

        <hr></hr>
        <p className="text-center text-white">
          @2024 Your Company All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
