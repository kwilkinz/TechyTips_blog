import React from "react";
import HeartTags from "./HeartTags";
import "./Tags.css";

// parent > BlogItem 
// CategoryTags > being used by BlogItem 
const CategoryTags = ({ label }) => (
    <div className="allTags"> 
        <div> <p className="tags">{label}</p> </div>
        <div> <HeartTags /> </div>
    </div>
)
export default CategoryTags;
