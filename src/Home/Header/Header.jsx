import React from 'react'
import './header.css';

const Header = () => {
  return (
    <div className='container-fluid bg-light py-4 ombraHeader d-flex justify-content-evenly '>
        <a className='text-decoration-none' href="">Blog</a>
        <a className='text-decoration-none' href="">PortFolio</a>
        <a className='text-decoration-none' href="">Contact</a>
    </div>
  )
}

export default Header