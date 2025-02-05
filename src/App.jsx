import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Header from "./Componnent/Header";
import Banner from "./Componnent/Banner";
import "react-toastify/dist/ReactToastify.css";
import Button from "./Componnent/Button";
import ShowPlayers from "./Componnent/ShowPlayers";
import Selected from "./Componnent/Selected";
import Live from "./Componnent/Live";
import Footer from "./Componnent/Footer";



//// header footer review
function App() {
  /// button click add reward
  const [credit, setcredit] = useState(0);

  const creditedMoney = (taka) => {
    setcredit(credit + 5000000);

    // alert(credit, + "added")
    toast.success(`${taka} credits added`);
  };
  console.log(credit);

  /// first part done
  // page to another page

  /// toggle use condition

  const [page, setpage] = useState(false);

  const togglebuttonfalse = () => {
    setpage(false);
  };
  const togglebuttonTrue = () => {
    setpage(true);
  };

 

  /// now work on player add section
  /// 1 . make here function
  // 2. pass function
  /// 3 . recive show player
  /// 4 . update selected

  const [select, setselect] = useState(0);

  const [plr, setplr] = useState([]);


  /// pass this is button.jsx

  const selectedCounter = (info, taka,  playerId) => {
    if (select >= 6) {
      toast.error("Maximum player added");
      return;
    }

    if (credit < taka) {
      toast.error("Insufficent  balance");
      return;
    }

    setcredit((prevcridt) => prevcridt - taka);
    setselect((prev) => prev + 1);
    setplr((prevplr) => [...prevplr, info]);

    toast.info(`${info.name} selected`);


  };

  // catch id button 
  // pass id selected.jsx + pass all data of player
  // /then use filter button click




  const removePlayer = (idx)=>{
    const removeplr =plr.filter((playerx)=> playerx.playerId!==idx);
    console.log(removeplr)
    setplr(removeplr);

    setselect(prev => prev-1);
    if(select<=0)
    {
      setselect(0);
    }
    toast.info("player removed successfully!");
    console.log(idx);
    console.log("removed")
  }


  return (
    <div>
      <header>
        <Header credit={credit} />

        <Banner creditedMoney={creditedMoney} />
      </header>
      <ToastContainer autoClose={3000} />
      <section>
        <Button
          togglebuttonfalse={togglebuttonfalse}
          togglebuttonTrue={togglebuttonTrue}
          counter = {select}
          page={page}
          
          
         
        />
      </section>
      {/* main started */}

   
 

      <main>
        {page ? (
          <ShowPlayers selectedCounter={selectedCounter} />
        ) : (
          <Selected
            counter={select}
            selectedCounter={selectedCounter}
            data={plr}
            removePlayer={removePlayer}
            togglebuttonTrue={togglebuttonTrue}
            
          />
        )}
      </main>

      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
