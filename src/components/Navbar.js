import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navbar-app'>
            <div className='navbar-content'>
            <NavLink to='/' activeclassname='active' className='nav-all'>All</NavLink>
                {/* <NavLink to='/travel' activeclassname='active' className='nav-travel'>Travel</NavLink>
                <NavLink to='/lifestyle' activeclassname='active' className='nav-lifestyle'>Lifestyle</NavLink>
                <NavLink to='/bussiness' activeclassname='active' className='nav-bussiness'>Bussiness</NavLink>
                <NavLink to='/food' activeclassname='active' className='nav-food'>Food</NavLink>
                <NavLink to='/work' activeclassname='active' className='nav-work'>Work</NavLink> */}
            </div>
        </nav>
    )
}

export default Navbar