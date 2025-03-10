import React, { useState } from "react";


const Home = () => {
  const [count, setCount] = useState(0); 



  function handleInc() {
    setCount(count + 1);
  }
 

  return (

    <div className="home-container">

      <button onClick={handleInc}>Increment</button>
      
      <button onClick={()=>{setCount(count+1)}}>{count}</button>
      
      <button
      disabled={count===0}
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default Home;