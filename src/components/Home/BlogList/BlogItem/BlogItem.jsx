import React from "react";
import { Link } from "react-router-dom";
import "./BlogItem.css";
import CategoryTags from "../../../common/Category/CategoryTags";
import HeartTags from "../../../common/Category/HeartTags";


const BlogItem = ({ blog }) => {
  const PF = "http://localhost:5000/images"

  return (
    <div className='blogItem-wrap'>
      {blog.photo && <img className="postImg" src={PF + blog.photo} alt="cover photo" />}
  
      <CategoryTags label={blog.category} />
      <Link to={`/post/${blog._id}`} style={{textDecoration: "none", color: "inherit"}}>
      <h3>{blog.title}</h3>
      </Link>
      <p className='blogItem-desc'>{blog.desc}</p>

      <footer>
        <div className="blogItem-author">
          <img src={blog.profilePic} alt="avatar" />
          <div>
            <h6>{blog.username}</h6>
            <p> {new Date(blog.createdAt).toDateString()}</p>
          </div>
        </div>
        <div className="blogItem-link" >
          ➝
        </div>
      </footer>
    </div>
  );
}

export default BlogItem;
