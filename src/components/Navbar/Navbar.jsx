import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";
import DarkMode from "../DarkMode/DarkMode";
import Fire from "../../assets/fire.png";
import Star from "../../assets/glowing-star.png";
import Party from "../../assets/partying-face.png";

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h1>MovieManiac</h1>

            <div className='navbar_links'>
                <DarkMode />
                
                {/* <a href='#popular'>
                    Popular{" "}
                    <img src={Fire} alt='fire emoji' className='navbar_emoji' />
                </a> */}

                <NavLink to="/">
                    Popular{" "}
                    <img src={Fire} alt='fire emoji' className='navbar_emoji' />

                </NavLink>

                {/* <a href='#top_rated'>
                    Top Rated{" "}
                    <img src={Star} alt='star emoji' className='navbar_emoji' />
                </a> */}

                <NavLink to="/top_rated">
                    Top Rated{" "}
                    <img src={Star} alt='star emoji' className='navbar_emoji' />

                </NavLink>


                {/* <a href='#upcoming'>
                    Upcoming{" "}
                    <img
                        src={Party}
                        alt='party face emoji'
                        className='navbar_emoji'
                    />
                </a> */}

                <NavLink to="/upcoming">
                    Upcoming{" "}
                    <img
                        src={Party}
                        alt='party face emoji'
                        className='navbar_emoji'
                    />
                </NavLink>


            </div>
        </nav>
    );
};

export default Navbar;
