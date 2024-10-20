import React from 'react'
import './Navbar.css'
import menuIcon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import searchIcon from '../../assets/search.png'
import uploadIcon from '../../assets/upload.png'
import moreIcon from '../../assets/more.png'
import notificationIcon from '../../assets/notification.png'
import profileIcon from '../../assets/jack.png'
import { Link } from 'react-router-dom'


const Navbar = ({setSidebar}) => {

  const toggleSidebar = () => {
    setSidebar(prev => prev === false ? true : false)
  }
  
  return (
    <nav className='flex-div'>
        <div className='nav-left flex-div'>
            <img className='menu-icon' alt='' src={menuIcon} onClick={toggleSidebar} />
            <Link to='/'><img className='logo' alt='' src={logo} /></Link>
        </div>

        <div className='nav-middle flex-div'>
            <div className='search-box flex-div'>
                <input type='text' placeholder='Search' />
                <img alt='' src={searchIcon} />
            </div>
        </div>

        <div className='nav-right flex-div'>
            <img alt='' src={uploadIcon} />
            <img alt='' src={moreIcon} />
            <img alt='' src={notificationIcon} />
            <img alt='' src={profileIcon} className='user-icon'/>
        </div>
    </nav>
  )
}

export default Navbar