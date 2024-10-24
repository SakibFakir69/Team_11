import React from "react";

function ShowsAllPlayer({ Allplayers }) {
  console.log(Allplayers);

  const {
    battingType,
    biddingPrice,
    bowlingType,
    country,
    image,
    name,
    playerId,role
  } = Allplayers;
  return (
    <div>
      <div className="p-2">

        <div className="">
          <img src={image}></img>
          <p>{name}</p>
          <p>{country}</p>
          <div>
            <p>{role}</p>
          </div>
          <p>{biddingPrice} $ </p>
        </div>

      </div>
    </div>
  );
}

export default ShowsAllPlayer;
