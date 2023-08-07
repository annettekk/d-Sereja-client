import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
    <header>
        <h1>Jaga Galganek Photography</h1>
        <nav>
          <ul>
            <li className='navLi'> <Link className='link' to={"/"}>Home</Link></li>
            <li className='navLi'> <Link className='link' to={"/about"}>About</Link></li>
            <li className='navLi'> <Link className='link' to={"/gallery"}>Gallery</Link></li>
            <li className='navLi'> <Link className='link' to={"/contact"}>Contact</Link></li>

          </ul>
        </nav>
        <div>Login placeholder</div>
        <div>Cart placeholder</div>
      </header>
    </>
  )
}

