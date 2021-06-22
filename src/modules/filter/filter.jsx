import React, { useState } from 'react'
import { filterByRegion } from "../../redux/countrySlice";
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown} from '@fortawesome/free-solid-svg-icons'
import './Filter.scss'

const Filter = () => {

    const dispatch = useDispatch();
    const [selectedText, setSelectedText] = useState("Filter by Region")
    const [displayDropDown, setDisplayDropDown] = useState(false)

    const handleOnclick = (selection) => {
        handleDisplayDropdown()
        setSelectedText(selection.charAt(0).toUpperCase() + selection.slice(1))
        dispatch(filterByRegion(selection))
    }

    const handleDisplayDropdown = () => {
        const toggledIsOpen = displayDropDown ? false : true;

        setDisplayDropDown(toggledIsOpen)
    }

    return (
        <div className="Filter">
            <div className="Filter-Container" onClick={() => handleDisplayDropdown()}>
                <p className="Filter-Container-Text">{selectedText}</p>
                <FontAwesomeIcon className="Filter-Container-Icon" icon={faChevronDown} />
            </div>

            {displayDropDown && 
                <ul className="Filter-Dropdown">
                    <li onClick={() => handleOnclick("africa")}>Africa</li>
                    <li onClick={() => handleOnclick("americas")}>Americas</li>
                    <li onClick={() => handleOnclick("asia")}>Asia</li>
                    <li onClick={() => handleOnclick("europe")}>Europe</li>
                    <li onClick={() => handleOnclick("oceania")}>Oceania</li>
                </ul>
            }
        </div>
    )
}

export default Filter