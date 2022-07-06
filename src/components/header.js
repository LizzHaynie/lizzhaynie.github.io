import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
    const [mobileOpened, setMobileOpened] = useState(false);
    const location = useLocation();

    useEffect(() => {
        document.body.scrollTop = document.documentElement.scrollTop = 0
    }, [location.pathname]);

    return (
        <>
            <div className="header-container">
                {typeof window !== 'undefined' && window.innerWidth <= 1023 ? 
                    <div className="header-left-links">
                        <div onClick={() => setMobileOpened(!mobileOpened)} className={`menu-button-container ${mobileOpened ? "menu-opened-view" : ""}`}>
                            <div className="menu-button" />
                            <ul className={`menu ${mobileOpened ? "menu-visible" : "menu-hidden"}`}>
                                <li className={!location.pathname.includes('projects') ? "active-menu" : ""}><Link to="/">Home</Link></li>
                                <li className={location.pathname.includes('projects') ? "active-menu" : ""}><Link to="/projects">Projects</Link></li>
                            </ul>
                        </div>
                    </div>
                : typeof window !== 'undefined' && window.innerWidth > 1023 &&
                    <div className="header-left-links">
                        <ul className='menu'>
                            <li className={!location.pathname.includes('projects') ? "active-menu" : ""}><Link to="/">Home</Link></li>
                            <li className={location.pathname.includes('projects') ? "active-menu" : ""}><Link to="/projects">Projects</Link></li>
                        </ul>
                    </div>
                }
            </div>
            {mobileOpened && <div onClick={() => setMobileOpened(false)} className="opaque-overlay" />}
        </>
    );
}