import React from "react";
import "./BlogItem.css";
import CategoryTags from "../common/Category/CategoryTags";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { useContext } from "react";
import ReactMarkdown from "react-markdown";

const BlogItem = ({ post }) => {
  const PF = "https://techytips-backend.onrender.com/images";
  const { user } = useContext(Context);

  return (
    <div className="blogItem-wrap">
      {post.photo && (
        <img className="postImg" src={PF + post.photo} alt="" />
      )}
      <CategoryTags label={post.category} />
      <Link
        to={`/post/${post._id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <h3>{post.title}</h3>
      </Link>
      <ReactMarkdown className="blogItem-desc" children={post.desc} escapeHtml={true} />

      <footer>
        <div className="blogItem-author">
          {user ? <img src={user.profilePic} alt="" /> : null }
          
          <div>
            <h6>{post.username}</h6>
            <p> {new Date(post.createdAt).toDateString()}</p>
          </div>
        </div>
        <div className="blogItem-link">➝</div>
      </footer>
    </div>
  );
};

export default BlogItem;
