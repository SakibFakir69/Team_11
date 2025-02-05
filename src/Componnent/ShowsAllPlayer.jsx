import React from "react";
import '../index.css'

function ShowsAllPlayer({ post,selectedCounter }) {

 /// get from showplayers

  const {
    battingType,
    biddingPrice,
    bowlingType,
    country,
    image,
    name,
    playerId,
    role,
  } = post;

  return (
    <div className="api">
      <div className="p-2">

        <div className="border-2 p-3 rounded-md">
          <img
            src={image}
            alt={name}
            className="object-cover w-full h-96 object-top rounded-md"
          ></img>

          <div className="flex justify-between ">
            <div className="flex flex-col mt-6">
              <p className="font-semibold">
                <i class="ri-account-circle-fill"></i> {name}
              </p>
              <p className="text-gray-400">
                <i class="ri-flag-fill"></i> {country}
              </p>
            </div>

            <div className="mt-6">
              <button className="font-semibold rounded-md border px-6 py-2 text-gray-500">
                {role}
              </button>
            </div>
          </div>
          {/* rating here */}

          <hr></hr>
          <p className="font-semibold text-xl">Rating</p>

          <div className="flex justify-between">
            <p className="text-xl font-semibold">Left-Hand-Bat </p>
            <p className="text-xl font-semibold text-gray-400">Left-Hand-bat</p>

          </div>

          {/* chose player and price and make dynamic */}
          {/* button make dynamic */}

          <div className="flex justify-between">
            <p className="text-xl font-semibold">Price: ${biddingPrice}</p>

            {/* this button make dynamic */}

            <button className="border-2 px-4 py-1 rounded-md font-semibold"

            onClick={()=>selectedCounter(post,biddingPrice,  playerId)} 
            /// here ctach data 
            /// use to show data and player counter 
            
            
            
            >Choose player</button>
          </div>



        </div>
      </div>
    </div>
  );
}

export default ShowsAllPlayer;
