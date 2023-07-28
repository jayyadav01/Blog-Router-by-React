import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function SingleBlog() {
    const  obj = useParams();
    console.log(obj);
    const [SinglePost,setSinglePost] = useState({}); 

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/' + obj.id).then((response) => {
            // console.log(response.data);
            setSinglePost(response.data);
        })
    } , [])
  return (
    <>
        <h1>SingleBlog</h1>
        <div className='singlePost'>
            <h3>{SinglePost.title}</h3>
            <p>{SinglePost.body}</p>
        </div>
    </>
  )
}

export default SingleBlog
