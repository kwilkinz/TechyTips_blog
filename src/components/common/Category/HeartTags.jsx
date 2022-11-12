import React, { useState } from "react";
import { FiHeart } from "react-icons/fi"
import "./HeartTags.css";

const HeartTags = () => {
    const [active, setActive] = useState(false)

    const handleClick = () => {
        setActive(!active)
    }

    return (
        <div>
            <FiHeart 
                onClick={handleClick}    
                className={active ? "red-heart" : "original-heart"} 
            />
        </div>
    );
}

export default HeartTags;