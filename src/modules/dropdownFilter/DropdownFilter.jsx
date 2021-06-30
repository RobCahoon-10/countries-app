import React, { useState } from 'react'
import { filterByRegion } from "../../redux/countrySlice";
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown} from '@fortawesome/free-solid-svg-icons'
import './DropdownFilter.scss'

const DropdownFilter = () => {

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

    const handleOnBlur = () => {
        setDisplayDropDown(false)
    }

    return (
        <div className="DropdownFilter" tabIndex="1" onBlur={handleOnBlur} onClick={() => handleDisplayDropdown()}>
            <div className="DropdownFilter-Container" >
                <p className="DropdownFilter-Container-Text">{selectedText}</p>
                <FontAwesomeIcon className="DropdownFilter-Container-Icon" icon={faChevronDown} />
            </div>

            {displayDropDown && 
                <ul className="DropdownFilter-Dropdown">
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

export default DropdownFilter