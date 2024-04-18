import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    useEffect(() => {
        AOS.init();
      }, [])

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/updateProfile">Update Profile</NavLink></li>
        <li><NavLink to="/profile">Profile</NavLink></li>
        <li><NavLink to="/features">Features </NavLink></li>
    </>
    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div data-aos="fade-right" className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Stay <span className="text-[#cf827c]">Haven</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <div className="flex items-center gap-3">
                            <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                                <img className="w-12 h-12 rounded-full" src={user?.photoURL} />
                            </div>
                            <Link ><button onClick={handleLogOut} className="btn bg-[#cf827c] text-white hover:text-black">Log Out</button></Link>
                        </div>
                    </>
                        :
                        <Link to="/login"><a className="btn bg-[#cf827c] text-white hover:text-black">Login</a></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;