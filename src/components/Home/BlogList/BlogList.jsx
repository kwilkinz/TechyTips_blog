import React from "react";
import "./BlogList.css";
import BlogItem from "./BlogItem/BlogItem";

const BlogList = ({ blogs }) => {

    return (
        <div className='blogList-wrap' style={{margin: "3.5%"}}>
          {blogs.map((blog, index) => (
            <BlogItem blog={blog} />
          ))}
        </div>
      );

}

export default BlogList;