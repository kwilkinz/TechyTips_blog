import React from "react";
import "./BlogList.css";
import BlogItem from "../BlogItem/BlogItem"

const BlogList = ({ posts }) => {
    return (
        <div className='blogList-wrap' style={{margin: "3.5%"}}>
          {posts.map((post, index) => (
            <BlogItem post={post} key={index}/>
          ))}
        </div>
      );
}

export default BlogList;