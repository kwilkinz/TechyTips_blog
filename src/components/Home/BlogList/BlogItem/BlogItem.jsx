import React from "react";
import { Link } from "react-router-dom";
import "./BlogItem.css";
import CategoryTags from "../../../common/Category/CategoryTags";
import HeartTags from "../../../common/Category/HeartTags";


const BlogItem = ({
  blog: {
    title,
    category,
    subCategory,
    description,
    authorName,
    authorAvatar,
    createdAt,
    cover,
    id,
  },
}) => {
  return (
    <div className='blogItem-wrap'>
      <img className='blogItem-cover' src={cover} alt='cover' />
      <CategoryTags label={category} />
      <h3>{title}</h3>
      <p className='blogItem-desc'>{description}</p>

      {/* footer ( author, date, arrow )*/}
      <footer>
        <div className="blogItem-author">
          <img src={authorAvatar} alt="avatar" />
          <div>
            <h6>{authorName}</h6>
            <p>{createdAt}</p>
          </div>
        </div>
        <Link className="blogItem-link" >
          ➝
        </Link>
      </footer>
    </div>
  );
};

export default BlogItem;
