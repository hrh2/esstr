import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from "react-router-dom";

function Home() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isRoot = location.pathname === "/";

    const toggleMenu = () => setMenuOpen(prev => !prev);

    useEffect(() => {
        const revealOnScroll = () => {
            document.querySelectorAll('.reveal').forEach(el => {
                const elementTop = el.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (elementTop < windowHeight - 150) {
                    el.classList.add('active');
                }
            });
        };

        const smoothScroll = (e) => {
            const href = e.target.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth',
                    });
                    setMenuOpen(false);
                }
            }
        };

        const onScroll = () => {
            setScrolled(window.scrollY > 50);
            revealOnScroll();
        };

        window.addEventListener('scroll', onScroll);
        window.addEventListener('load', revealOnScroll);
        document.querySelectorAll('a[href^="#"]').forEach(a =>
            a.addEventListener('click', smoothScroll)
        );

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('load', revealOnScroll);
            document.querySelectorAll('a[href^="#"]').forEach(a =>
                a.removeEventListener('click', smoothScroll)
            );
        };
    }, []);

    const sectionLinks = [
        { href: "#academics", label: "Services" },
        { href: "#about", label: "About Us" },
        { href: "#events", label: "Combination" },
        { href: "#contact", label: "Contact" },
        { href: "#contact", label: "Text us", className: "bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors" },
    ];

    return (
        <>
            <header className={`fixed w-full z-50 transition-all duration-300 bg-gradient-to-br from-indigo-50 to-blue-50 ${scrolled ? 'py-3 shadow-md bg-white' : 'py-4 bg-transparent'}`}>
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center">
                        <a href="#" className="text-2xl font-bold text-indigo-600">ECOLE SECONDAIRE SAINT TRINITE RUHANGO</a>
                        <nav className="hidden md:flex items-center space-x-8">
                            <a href={"/#home"} className="font-extrabold text-xl hover:text-indigo-600 transition-colors">Home</a>
                            <a
                                href="/real"
                                className="bg-gradient-to-r  from-pink-500 via-purple-500 to-indigo-500 font-bold text-white px-6 py-3 rounded-full inline-block shadow-lg hover:brightness-110 hover:scale-105 transform transition-all duration-300"
                            >
                                RAEL
                            </a>
                            {isRoot && sectionLinks.map(link => (
                                <a key={link.href} href={link.href} className={`font-medium hover:text-indigo-600 transition-colors ${link.className || ''}`}>
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                        <button onClick={toggleMenu} className="md:hidden text-gray-700" id="mobile-menu-button">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                    <div className={`md:hidden ${menuOpen ? '' : 'hidden'} bg-gradient-to-br from-indigo-50 to-blue-50 p-2`} id="mobile-menu">
                        <div className="flex flex-col space-y-4 mt-4 pb-4">
                            <a href={"/#home"} className="font-bold text-xl hover:text-indigo-600 transition-colors">Home</a>
                            <a
                                href="/real"
                                className="bg-gradient-to-r  from-pink-500 via-purple-500 to-indigo-500 font-bold text-white px-6 py-3 rounded-full inline-block shadow-lg hover:brightness-110 hover:scale-105 transform transition-all duration-300"
                            >
                                RAEL
                            </a>
                            {isRoot && sectionLinks.map(link => (
                                <a key={link.href} href={link.href} className={`font-medium hover:text-indigo-600 transition-colors ${link.className || ''}`}>
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </header>
            <Outlet />
        </>
    );
}

export default Home;
