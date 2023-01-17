import React, { useEffect, useState } from "react";
import EmptyList from "../../components/common/EmptyList/EmptyList";
import BlogList from "../../components/BlogList/BlogList";
import Header from "../../components/Header/Header";
import axios from "axios";
// import API_BASE_URL from "../../config/api";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const url = 'https://techytips-backend.onrender.com/api/posts'

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(url)
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <Header />
      {posts.length ? <BlogList posts={posts} /> : <EmptyList />}
    </div>
  );
};

export default Home;
