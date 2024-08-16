import './NavBar.css';
import {gsap} from 'gsap';
import {useRef, useState} from 'react';
import {useGSAP} from '@gsap/react';
import {useLocation} from 'react-router-dom';

import logo from '/src/assets/logo/white_horizontal_no_bg_cropped_left.png';

function NavBar() {
  const navMenuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const tl = gsap.timeline();
  const location = useLocation();

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  useGSAP(() => {
    if (menuOpen === true) {
      document.body.style.overflow = 'hidden';
      navMenuRef.current.style.zIndex = 50;
      tl.to(navMenuRef.current, {
        opacity: '1',
        duration: 0.3
      });
      tl.to('.menu-close', {
        opacity: 1,
        duration: 0.5
      }, '<');
    } else if (menuOpen === false) {
      document.body.style.overflow = 'auto';
      tl.to(navMenuRef.current, {
        opacity: '0',
        duration: 0.3
      });
      tl.to('.menu-close', {
        opacity: 0,
        duration: 0.3
      }, '<');
      tl.to(navMenuRef.current, {
        zIndex: '-1',
        duration: 0
      }, '>');
    }
  }, [menuOpen]);


  return (
    <div className='nav-cont' id='nav-cont'>
      <div className='nav-top'>
        <a className='logo' href='/'>
          <img src={logo} alt='Elan & nVision'/>
        </a>

        <div className='nav-links'>
          <div className='mobile-hide'>
            <a href='/events'>EVENTS</a>
          </div>
          <div className='mobile-hide'>
            <a href='/competitions'>COMPETITIONS</a>
          </div>
          <div className='mobile-hide'>
            <a href='/workshops'>WORKSHOPS</a>
          </div>
          <div className='mobile-hide'>
            <a href='#footer'>CONTACT US</a>
          </div>
          <div className='menu-open' onClick={toggleMenu}>
            MENU
          </div>
        </div>
      </div>

      <div className='nav-menu' ref={navMenuRef}>
        <div className='menu-close'>
          <span className='' onClick={toggleMenu}>CLOSE</span>
        </div>
        <div className='menu'>
          <div className={'menu-link' + (location.pathname === '/' ? ' active-menu-link' : '')}>
            <a href='/'>Home</a>
          </div>
          <div className={'menu-link' + (location.pathname === '/events' ? ' active-menu-link' : '')}>
            <a href='/events'>Events</a>
          </div>
          <div className={'menu-link' + (location.pathname === '/competitions' ? ' active-menu-link' : '')}>
            <a href='/competitions'>Competitions</a>
          </div>
          <div className={'menu-link' + (location.pathname === '/workshops' ? ' active-menu-link' : '')}>
            <a href='/workshops'>Workshops</a>
          </div>
          <div className={'menu-link' + (location.pathname === '/socialcause' ? ' active-menu-link' : '')}>
            <a href='/socialcause'>Social Cause</a>
          </div>
          <div className={'menu-link' + (location.pathname === '/accommodation' ? ' active-menu-link' : '')}>
            <a href='/accommodation'>Accommodation</a>
          </div>
          <div className={'menu-link' + (location.pathname === '/team' ? ' active-menu-link' : '')}>
            <a href='/team'>Team</a>
          </div>
        </div>
        <div className='social-links'>
          <div>
            <a href='mailto:elan@iith.ac.in' rel='noopener noreferrer' className='mail-link'>elan@iith.ac.in</a>
          </div>
          <div className='social-social-media-links'>
            <a className='link-red' href='https://www.instagram.com/elan_nvision.iith' rel='noopener noreferrer'
               target='_blank'>Instagram</a><span className='mobile-hide'>&nbsp;/&nbsp;</span>
            <a className='link-green' href='https://x.com/elan_nvision' rel='noopener noreferrer'
               target='_blank'>Twitter</a><span className='mobile-hide'>&nbsp;/&nbsp;</span>
            <a className='link-yellow' href='https://www.facebook.com/elannvision.iithyderabad/'
               rel='noopener noreferrer' target='_blank'>Facebook</a><span className='mobile-hide'>&nbsp;/&nbsp;</span>
            <a className='link-orange' href='https://www.linkedin.com/company/elan-nvision-iith/'
               rel='noopener noreferrer' target='_blank'>Linkedin</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;