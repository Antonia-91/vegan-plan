import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className='navbar'>
        <div className='nav-container'>
          <NavLink to='/' className='nav-logo'>
            <img
              src={require('../img/vegan-plan-logo.png').default}
              width={130}
              alt='Vegan Plan logo'
            />
          </NavLink>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <NavLink
                to='/'
                className='nav-links'
                onClick={handleClick}
              >
                Hem
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/about'
                className='nav-links'
                onClick={handleClick}
              >
                Om oss
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/recept'
                className='nav-links'
                onClick={handleClick}
              >
                Recept
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/mina-sidor'
                className='nav-links'
                onClick={handleClick}
              >
                <button className='btn-middle'>Mina sidor</button>
              </NavLink>
            </li>
            <li className='nav-item'></li>
          </ul>
          <div className='nav-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
