import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import {GiHamburgerMenu} from 'react-icons/gi';
import {FaHome} from 'react-icons/fa';
import {BsJournalBookmark} from 'react-icons/bs';
import {CgProfile} from 'react-icons/cg';
import {AiOutlineLogout} from 'react-icons/ai';


import { logout } from '../../store/session';

function ProfileButton() {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const user = useSelector(state => state.session.user);


  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);


    const onLogout = async (e) => {
      await dispatch(logout());
    };

  return (
    <>
      <div onClick={openMenu} className='profile-btn'>
        <GiHamburgerMenu />
        <img src="/images/ProfilePic.png" alt="avatar"></img>
      </div>
      {showMenu && (
        <div className='profile-btn-nav' >
          <NavLink to="/profile">
             <CgProfile />Profile
          </NavLink>
          <NavLink to="/profile/bookings">
            <BsJournalBookmark />Bookings
          </NavLink>
          <NavLink to="/profile/properties">
           <FaHome/>Properties
          </NavLink>
          <div onClick={onLogout}><AiOutlineLogout/>Logout</div>
        </div>
      )}
    </>
  );
}

export default ProfileButton;