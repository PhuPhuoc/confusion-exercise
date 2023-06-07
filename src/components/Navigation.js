import React from 'react';
import { useContext } from 'react'
import { ThemeCont } from './ThemeContext'

const Navigation = () => {
    const { theme, toggle, dark } = useContext(ThemeCont)
    return (
        <div>
            <nav style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
                <ul>
                    <li><a style={{color: theme.color }} href="#home" className="active">Home</a></li>
                    <li><a style={{color: theme.color }} href="#news">News</a></li>
                    <li><a style={{color: theme.color }} href="#about">About</a></li>
                    <li><a style={{color: theme.color }} href="#contact">Contact</a></li>
                    <li>
                        <div style={{ marginLeft: '950px' }}>
                            <a className='switch-mode' href='#' onClick={toggle}
                                style={{
                                    backgroundColor: theme.backgroundColor,
                                    color: theme.color,
                                    outline: 'none'
                                }} data-testid="toggle-theme-btn"
                            >
                                Switch Nav to {!dark ? 'Dark' : 'Light'} mode
                            </a>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;