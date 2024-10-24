
import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import Header from './Componnent/Header'
import Banner from './Componnent/Banner'
import 'react-toastify/dist/ReactToastify.css';
import Button from './Componnent/Button';
import ShowPlayers from './Componnent/ShowPlayers';
function App() {
  /// button click add reward 
  const [ credit , setcredit ] = useState(0);

  
  const creditedMoney =(taka)=>{
    let update = taka+credit;
    setcredit(update);
    // alert(credit, + "added")
    toast.success( `${taka} credits added`)
    
  }
  console.log(credit);

  /// first part done



  return (
    <div>

      <header>
        <Header credit={credit}/>

        <Banner creditedMoney={creditedMoney} />
  

      </header>
      <ToastContainer autoClose={3000}/>
      <section>
        <Button/>
      </section>
      {/* main started */}

      <main>
        <ShowPlayers/>
        
        
      </main>



    </div>
  )
}

export default App