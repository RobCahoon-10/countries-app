import React, { useState } from 'react'
import './SearchBox.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { loadData, countrySearch, filterByRegion, countrySearchWithRegion } from "../../redux/countrySlice";
import { useDispatch } from 'react-redux'

const SearchBox = (props) => {

    const dispatch = useDispatch();
    const [clearIconClassName, setClearIconClassName] = useState("");
    const [searchText, setSearchText] = useState("");

    const handleKeyPress = (e) => {
        let text = e.target.value;

        setSearchText(text)
        
        if(text.length >= 3){
            if(props.regionFilter) {
                dispatch(countrySearchWithRegion(text))
            } else {
                dispatch(countrySearch(text))
            }
            
            setClearIconClassName('--Show')
        }

        if (text.length === 0 && searchText.length >= 1) handleClearSearch()

    }

    const handleClearSearch = () => {
        if(props.regionFilter) {
            dispatch(filterByRegion(props.selectedRegion))
        } else {
            dispatch(loadData());
        }

        setClearIconClassName('')
        setSearchText('')
    }

    return (
        <div className="SearchBox">
            <FontAwesomeIcon className="SearchBox-SearchIcon" icon={faSearch} />
            <input className="SearchBox-Input" value={searchText} autoComplete="off" onChange={(e)=>handleKeyPress(e)} onKeyPress={(e)=>handleKeyPress(e)} name='searchBox' type='text' placeholder="Search for a country..." />
            <FontAwesomeIcon onClick={()=>handleClearSearch()} className={`SearchBox-RemoveIcon${clearIconClassName}`} icon={faTimesCircle} />
        </div>
    )
}

export default SearchBox