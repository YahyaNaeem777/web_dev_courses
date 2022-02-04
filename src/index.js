import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import CardsData from "./CardsData";

ReactDOM.render(
  <>
    {CardsData.map(function (currVal) {
      return (
        <App
          sname={currVal.sname}
          img={currVal.imgsrc}
          descriptions={currVal.descriptions}
          link={currVal.link}
          btn={currVal.btn}
        />
      );
    })}
    {/* <App
      sname={CardsData[0].sname}
      img={CardsData[0].imgsrc}
      descriptions={CardsData[0].descriptions}
      link={CardsData[0].link}
      btn={CardsData[0].btn}
    /> */}
    {/* <App
      sname={CardsData[1].sname}
      img={CardsData[1].imgsrc}
      descriptions={CardsData[1].descriptions}
      link={CardsData[1].link}
      btn={CardsData[1].btn}
    />
    <App
      sname={CardsData[2].sname}
      img={CardsData[2].imgsrc}
      descriptions={CardsData[2].descriptions}
      link={CardsData[2].link}
      btn={CardsData[2].btn}
    />
    <App
      sname={CardsData[3].sname}
      img={CardsData[3].imgsrc}
      descriptions={CardsData[3].descriptions}
      link={CardsData[3].link}
      btn={CardsData[3].btn}
    />
    <App
      sname={CardsData[4].sname}
      img={CardsData[4].imgsrc}
      descriptions={CardsData[4].descriptions}
      link={CardsData[4].link}
      btn={CardsData[4].btn}
    />
    <App
      sname={CardsData[5].sname}
      img={CardsData[5].imgsrc}
      descriptions={CardsData[5].descriptions}
      link={CardsData[5].link}
      btn={CardsData[5].btn}
    /> */}
  </>,
  document.getElementById("root")
);
