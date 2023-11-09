import React from 'react'
import RecentPosts from './RecentPosts';
import '../assets/scss/components/Sidebar.css'

const Sidebar = () => {
  return (
    <section className="sidebar">
        <div className="searchbar">
            <input type="text" name="search" title="Search" placeholder="Type to search..." />
            <button><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>
        <div className="recent-posts">
            <h4>
                Recent Posts
            </h4>
            <RecentPosts />
        </div>
        <div className="recent-posts categories">
            <h4>
                Categories
            </h4>
            <a href="#">
                Technology - <span>20 Posts</span>
            </a>
            <a href="#">
                Freelancing - <span>07 Posts</span>
            </a>
            <a href="#">
                Writing - <span>16 Posts</span>
            </a>
            <a href="#">
                Marketing - <span>11 Posts</span>
            </a>
            <a href="#">
                Business - <span>35 Posts</span>
            </a>
            <a href="#">
                Education - <span>14 Posts</span>
            </a>
        </div>
    </section>
  )
}

export default Sidebar