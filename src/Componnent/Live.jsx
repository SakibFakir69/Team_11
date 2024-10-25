import React from "react";

function Live({ item }) {
  const { name, image,role, biddingPrice , country,id} = item;

  /// make delet,jsx



  return (
    <div className="px-4 mt-10 flex justify-between border-2 rounded-md">
        
        <div className="flex space-x-3  p-4 rounded-md">
            <div>
                <img src={image} className="h-28 rounded-md"/>
                {/* Each card will have player image , name , player role, pric */}

            </div>
            <div className="grid grid-cols-2">
                <p>Name : {name}</p>
                <p>Role :{role}</p>
                <p>Price : {biddingPrice}$</p>
                <p>Country :{ country}</p>
            </div>
        </div>
        <button> X

        </button>
      
    </div>

  )
}

export default Live;
