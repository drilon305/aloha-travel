import React, {useState} from 'react'
import './NavbarStyle.css'
import {BiSearch} from 'react-icons/bi'
import {BsPerson} from 'react-icons/bs'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

  return (
    <div className={nav ? 'navbar navbar-bg' : 'navbar'}>
        <div className="logo">
            <h2>Aloha</h2>
        </div>
        <ul className='nav-menu'>
            <li>Home</li>
            <li>Destination</li>
            <li>Contact</li>
            <li>About Us</li>
        </ul>
        <div className="nav-icons">
            <BiSearch className='icon' style={{marginRight: '1rem', cursor: 'pointer'}} />
            <BsPerson className='icon' style={{cursor: 'pointer'}} />
        </div>
        <div className="hamburger" onClick={handleNav}>
            <HiOutlineMenuAlt4 className='icon' />
        </div>

        <div className={nav ? "mobile-menu active" : "mobile-menu"}>
            <ul className="mobile-nav">
            <li>Home</li>
            <li>Destination</li>
            <li>Contact</li>
            <li>About Us</li>
            </ul>

            <div className="mobile-menu-bottom">
                <div className="menu-icons">
            <button>Search</button>
            <button>Account</button>
                </div>
                <div className="social-icons">
                <FaFacebook className='icon' />
                        <FaInstagram className='icon' />
                        <FaTwitter className='icon' />
                        <FaPinterest className='icon' />
                        <FaYoutube className='icon' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar