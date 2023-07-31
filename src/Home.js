import React from 'react'
import { Router } from 'react-router-dom'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Header from './Header'
import About from './About'
import Contact from './Contact'
import Main from './Main'
import Blog from './Blog'
import SingleBlog from './SingleBlog'
import './Home.css'
import NewBlog from './NewBlog'

function home() {
  return (
    <>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Main/>}></Route>
                <Route path='About' element={<About/>}></Route>
                <Route path='Contact' element={<Contact/>}></Route>
                {/* <Route path='Blog' element={<Blog/>}></Route>
                <Route path='/posts/:id' element={<SingleBlog/>}></Route> */}

                <Route path='/Blog' element={<NewBlog/>}>
                  <Route index element={<Blog/>}></Route>
                  <Route path=':id' element={<SingleBlog/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>

    </>
  )
}

export default home
