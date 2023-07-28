import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <>
        <div className='header'>
            <h2 className='logo'><Link to='/'> Logo</Link></h2>
            <ul>
                <li><Link to='/'> Home</Link></li>
                <li><Link to='/About'>About</Link></li>
                <li><Link to='/Contact'>Contact</Link></li>
                <li><Link to='/Blog'>Blog</Link></li>
            </ul>

        </div>
    </>
  )
}

export default About