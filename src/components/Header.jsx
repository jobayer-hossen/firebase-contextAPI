import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const Header = () => {
  const {user , logOut}= useContext(AuthContext);
  console.log(user);
  const handleLogout =()=>{
    logOut()
    .then( ()=>{})
    .catch(error =>{
      console.error(error)
    })
  }
  return (
    <div className="">
      <div className="navbar bg-neutral text-neutral-content">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        <div className="gap-5">
        <Link to='/' >Home </Link>
        <Link to='/login' >Log in </Link>
        <Link to='/resister' >Resister </Link>
        <Link to='/order'>Order</Link>
        { user && <Link to='/profile'>Profile</Link>}
        {
          user ? <>
          <span>{user.email}</span>
          <button onClick={handleLogout} className="btn btn-xs">Sign Out</button>
          </> : <Link to='/login' >Log in</Link>
        }
        </div>


      </div>
    </div>
  );
};

export default Header;
