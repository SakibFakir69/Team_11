import React from "react";

function Footer() {
  return (
    <div className="  mt-20  rounded-md  ">
      <div className="w-3/4  bg-cover  text-center p-8  rounded-md bg-gradient-to-l from-pink-200 to-pink-200  absolute -mt-14 md:ml-24 border-2 md:p-10 shadow-xl ">
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

      <div className="bg-gray-950  rounded-md mt-10 p-10">
        <div className=" flex justify-center items-center mt-32">
          <img src="../assets/banner-main.png" className="h-32" />
        </div>


        <section className="text-white flex justify-between p-4" >
            <div>
                <h2>About us</h2>
                <p>We are a passionate team <br></br>dedicated to providing the best <br></br>services to our customers.</p>
              
            </div>
            <div className="flex flex-col space-y-2">
                <h2>Quick Link</h2>
                <p>Home</p>
                <p>Services</p>
                <p>About</p>
                <p>Contact</p>
            </div>
            <div>
                <div>
                    <h2>Subscribe</h2>
                    <p>Subscribe to our newsletter for the latest updates.</p>
                </div>
                <div className="flex">
                    <input type="text" placeholder="Enter your main"/><button>Subcribe</button>
                </div>
            </div>
        </section>













        <hr></hr>
        <p className="text-center text-white">@2024 Your Company All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
