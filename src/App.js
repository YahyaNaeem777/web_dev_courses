import React from "react";
import "./App.css";

function App(props) {
  console.log(props);
  return (
    <>
      <div id="container">
        <div id="card">
          <img src={props.img} alt="here is pic" />

          <div id="card_info">
            <h3>{props.sname}</h3>
            <p>{props.descriptions}</p>
          </div>
          <a href={props.link}>
            <button type="button" className="card_btn">
              {props.btn}
            </button>
          </a>
        </div>
        <br />
        <br />
      </div>
    </>
  );
}

// function App() {
//   return (
//     <div>
//       <Cards name="yahya" id="234234" />
//       <Cards />
//     </div>
//   );
// }

export default App;
