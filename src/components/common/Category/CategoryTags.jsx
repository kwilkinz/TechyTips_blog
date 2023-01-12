import React from "react";
import "./Tags.css";

const CategoryTags = ({ label }) => (
    <div className="allTags"> 
        <div> <p className="tags">{label}</p> </div>
    </div>
)
export default CategoryTags;
