
import React from 'react';

import { Link } from 'react-router-dom';

const Navbar = () => {

    const navItem =
        <>
            <li>Home</li>
            {/* <li><Link to="dashboard">Dashboard</Link></li>
            <li><Link to="community">Community</Link></li>
            <li><Link to="allBooks">Books</Link></li>
            <li><Link to="about">About</Link></li>
            <li><Link to="login">Login</Link></li> */}

        </>
    return (
        <div className='text-white bg-[#021f5b] sticky top-0 border-b-2 border-[#0bc8ff] z-10'>
            <div class="navbar">
                <div class="navbar-start ">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#021f5b] rounded-box w-52">
                            {
                                navItem
                            }

                        </ul>
                    </div>
                    <Link to="/" class=" btn btn-primary uppercase text-lg text-white ">Tunicalabs media</Link>

                </div>
                <div class="navbar-end hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        {
                            navItem
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;