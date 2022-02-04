import React from "react";

function Cards(){
    return(
        <>
        <div id="container">
            <div id="card">
                <div id="img"></div>

                <div id="card_info">
                    <h1>Card Info</h1>
                </div>
                <a href="">
                    <button type="button" className="card_btn">Click Me</button>
                </a>
            </div>
        </div>
        </>
    )
}

export default Cards;