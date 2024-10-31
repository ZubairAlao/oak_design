import React, { useState, useEffect } from 'react';
import HeaderLogo from "@/assets/images/header-logo.png";
import Menubar from "@/assets/images/menubar.svg";
import CancelClose from "@/assets/images/close.svg";
import { Link, NavLink } from 'react-router-dom';
import { navHeaders } from '../constants';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const Header = () => {
    const [toggle, setToggle] = useState(false);



    const handleToggleButton = () => {
        setToggle(!toggle);
    };

    // Manage scroll lock on toggle
    useEffect(() => {
        if (toggle) {
            disableBodyScroll(document.body);
        } else {
            enableBodyScroll(document.body);
        }
    }, [toggle]);

    // Handle screen resizing to reset scroll on desktop view
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768 && toggle) {
                // If on desktop view, reset toggle and remove scroll lock
                setToggle(false);
                enableBodyScroll(document.body);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [toggle]);

    return (
        <header className='flex justify-center items-center'>
            <div className="fixed top-0 z-50 w-full md:px-4 bg-[#333333]">
                <div className="h-[89px] md:h-[58px] lg:h-[94px] bg-[#4B4B4B] md:my-4 flex justify-between items-center px-4">
                    <Link to="/" aria-label="Home" className="relative z-30">
                        <img src={HeaderLogo} alt="Website Logo" className="w-[66px] md:w-[50px] lg:w-[82px] h-fit" />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav aria-label="Main Navigation" className="hidden md:flex justify-center items-center gap-4 text-[1rem]">
                        <ul className="flex justify-center items-center space-x-6 text-sm">
                            {navHeaders.map((link) => (
                                <li className='text-base'
                                key={link.label}
                                >
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive ? 'md-link md-link-active ' : 'md-link'
                                        }
                                        to={link.link}
                                    >
                                        {link.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <button 
                        className="border border-[#AF885A] text-[#AF885A] px-3 py-2 lg:px-12 lg:py-4 text-[1rem] hidden md:block
                        transition-all duration-300 ease-in-out
                        bg-transparent hover:bg-[#AF885A] hover:text-[#F5F5F5]
                        hover:shadow-lg hover:scale-100
                        active:translate-y-[2px] active:shadow-none"
                    >
                        CONTACT US
                    </button>

                    <button
                        aria-label="Toggle navigation menu"
                        className="object-contain md:hidden cursor-pointer z-30 relative p-3"
                        onClick={handleToggleButton}
                    >
                        <img src={toggle ? CancelClose : Menubar} alt="menu"  className='h-fit w-[36px] '/>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <nav
                aria-label="Mobile Navigation"
                className={`md:hidden fixed top-[89px] right-0 left-0 transition-all duration-500 ease-in-out transform ${
                    toggle ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
                } bg-[#0C0C0D] text-center w-full koho-regular py-11 z-30`}
            >
                <ul className="space-y-9 w-[32%] max-w-[106px] mx-auto text-sm">
                    {navHeaders.map((link, index) => (
                        <li 
                          key={link.label}
                          className={`pb-3 w-full ${toggle ? 'animate-fadeInUp' : ''}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? 'nav-link nav-link-active' : 'nav-link'
                                }
                                to={link.link}
                                onClick={handleToggleButton}
                            >
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <div className={`mt-[2.25rem] ${toggle ? 'animate-fadeInUp' : ''}`}
                        style={{ animationDelay: `${navHeaders.length * 0.1}s` }}>
                    <button className="border border-[#C5A675] text-[#C5A675] px-7 py-2 text-[0.56rem]
                        transition-all duration-300 ease-in-out
                        bg-transparent hover:bg-[#AF885A] hover:text-[#F5F5F5]
                        hover:shadow-lg hover:scale-100
                        active:translate-y-[2px] active:shadow-none"
                    >
                        CONTACT US
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
