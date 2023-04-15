// import React, { useState } from "react";

// function Welcome() {
//   const [isOn, setIsOn] = useState(true);

//   return (
//     <div>
//       <button onClick={() => setIsOn(!isOn)}>{isOn ? "Hello!" : "Goodbye."}</button>
//     </div>
//   );
// }

// export default Welcome;

// import React from "react";

// function GreatestSoccerPlayer(props) {
//   return <h1>Greatest Soccer Player is: {props.player1}!</h1>;
// }

// function Soccer() {
//   return (
//     <div>
//       <GreatestSoccerPlayer player1="Messi" />
//     </div>
//   );
// }

// export default Soccer;

// import React, { useState, useEffect } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     function handleClick() {
//       setCount(count + 1);
//     }

//     document.addEventListener("click", handleClick);

//     return () => {
//       document.removeEventListener("click", handleClick);
//     };
//   }, [count]);

//   return (
//     <div>
//       <p>Count: {count}</p>
//     </div>
//   );
// }

// export default App;
