import React, { useState } from "react";
import EmptyList from "../../components/common/EmptyList/EmptyList";
import BlogList from "../../components/Home/BlogList/BlogList";
import Header from "../../components/Home/Header/Header"
import Search from "../../components/Home/SearchBar/Search";
import blogPosts from "../../config/db";

const Home = () => {
// useState 
    const [blogs, setBlogs] = useState(blogPosts);
    const [searchKey, setSearchKey] = useState('');

// useEffects for API later 

// Search Submit > when search clicked run the handleSearchResult func()
    const handleSearchSubmit = (event) => {
        event.preventDefault();
        handleSearchResults();
    }

    // Search for blogs by category > used by submit
    const handleSearchResults = () => {
        const allBlogs=blogPosts;
        const filteredBlogs=allBlogs.filter((blog) => 
            blog.category.toLowerCase().includes(searchKey.toLowerCase().trim()
        ));
        setBlogs(filteredBlogs)
    };

    // Clear the search Bar 
    const handleClearSearch = () => {
        setBlogs(blogPosts);
        setSearchKey('');
    }


    return (
        <div>
            {/* Page Header */}
            <Header />

            {/* search Bar */}
            <Search 
                value={searchKey}
                handleSearchKey={(e) => setSearchKey(e.target.value)}
                formSubmit={handleSearchSubmit}
                clearSearch={handleClearSearch}
            />

            {/* Blog List & Empty List */}
            {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
        
        </div>
    );
}

export default Home;