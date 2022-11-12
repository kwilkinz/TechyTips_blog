import React, { useState, useEffect } from "react";
import "./Blog.css";
import { useParams, Link } from "react-router-dom";
import CategoryTags from "../../components/common/Category/CategoryTags";
import EmptyList from "../../components/common/EmptyList/EmptyList";
import blogPosts from "../../config/db";

// for every independent page
// update the return when clicked on an id you get a link
const Blog = () => {
  // use params of which blog was clicked
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  // useEffect
  useEffect(() => {
    let blog = blogPosts.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, [id]);

  return (
    <div>
      <Link className="blog-goBack" to="/">
        <span> &#8592;</span> <span>Go Back</span>
      </Link>

      {blog ? (
        <div className="blog-wrap">
          <header>
            <p className="blog-date">Published {blog.createdAt}</p>
            <h1>{blog.title}</h1>
            <div className="blog-subCategory">
              {blog.subCategory.map((category, index) => (
                <div key={index}>
                  <CategoryTags label={category} />
                </div>
              ))}
            </div>
          </header>
          <img src={blog.cover} alt="cover" />
          <p className="blog-desc">{blog.description}</p>
        </div>
      ) : (
        <EmptyList />
      )}
    </div>
  );
};

export default Blog;
