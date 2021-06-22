import React, { useEffect }  from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon} from '@fortawesome/free-solid-svg-icons'
import './Header.scss'

const Header = () => {

    const setTheme = (themeName) => {
        localStorage.setItem('theme', themeName);
        document.documentElement.className = themeName;
    }

    const toggleTheme = () => {
        if (localStorage.getItem('theme') === 'Theme-Dark'){
            setTheme('Theme-Light');
        } else {
            setTheme('Theme-Dark');
        }
    }

    useEffect(() => {
        if (localStorage.getItem('theme') === 'Theme-Dark') {
            setTheme('Theme-Dark');
        } else {
            setTheme('Theme-Light');
        }
    }, []) 

    return (
        <header className="Header">
            <h1 className="Header-Text">Where in the world?</h1>
            <div className="Header-Switcher" onClick={() => toggleTheme()} >
                <FontAwesomeIcon className="Header-Switcher-Icon" icon={faMoon} />
                <span>Dark Mode</span>
            </div>
        </header>
    )
}

export default Header