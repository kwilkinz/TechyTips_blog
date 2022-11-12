import React from "react";
import "./BlogList.css";
import BlogItem from "./BlogItem/BlogItem";

// Owner  = Home  ( Holding the DB Data )
// parent > BlogList
// child  > blogItem ( passing params to child)
const BlogList = ({ blogs }) => {
    return (
        <div className='blogList-wrap'>
          {blogs.map((blog) => (
            <BlogItem 
                blog={blog} 
            />
          ))}
        </div>
      );
}

export default BlogList;