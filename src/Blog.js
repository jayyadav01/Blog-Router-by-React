import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
 
function Blog() {
    const [posts,setposts] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
            setposts(response.data);
        })
    } , [])
  return (
    <>
        <div className='blog'>
            <h2>Blogs</h2>
            <div className='blogPosts'>
                {
                    posts.map((post,index) => {
                        return <div className='post' key={index}>
                            <h3><Link to={`/posts/${post.id}`}>{post.title}</Link></h3>
                            <p>{post.body}</p>
                        </div>
                    })
                }
            </div>
        </div>
    </>
  )
}

export default Blog
