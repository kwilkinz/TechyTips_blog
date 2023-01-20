import React from "react";
import "./BlogItem.css";
import CategoryTags from "../common/Category/CategoryTags";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { useContext } from "react";

const BlogItem = ({ post }) => {
  const PF = "https://techytips-backend.onrender.com/images/";
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
      <p className="blogItem-desc">{post.desc}</p>

      <footer>
        <div className="blogItem-author">
          {user ? <img src={user.profilePic} alt="" /> : <img src="https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403"/> }
          
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
