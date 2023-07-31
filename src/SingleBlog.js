import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function SingleBlog() {
    const  obj = useParams();
    // console.log(obj);
    const [SinglePost,setSinglePost] = useState({}); 
    
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/' + obj.id).then((response) => {
            setSinglePost(response.data);
        })
    } , [])
  return (
    <>
        <h1 className='heading'>Single Blog</h1>
        <div className='singlepost'>
            <h3 className='singlehead'>{SinglePost.title}</h3>
            <p className='singlebody'>{SinglePost.body}</p>
        </div>
    </>
  )
}

export default SingleBlog
