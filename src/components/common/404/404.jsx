import React from "react";
import "../EmptyList/EmptyList.css"
import imageGif from "../../../images/13525-empty.gif"

const NotFound = () => {
    return (
        <div className="emptyList-wrap">
            <div style={{marginTop: "20px"}}>
            <h3>Sorry! We can't find that page!... </h3>
            <img src={imageGif} alt="empty" /> 
            </div>

        </div>
    );
}

export default NotFound;