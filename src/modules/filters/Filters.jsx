import React from 'react'
import SearchBox from '../../modules/searchBox/SearchBox'
import DropdownFilter from '../../modules/dropdownFilter/DropdownFilter'
import './Filters.scss'

const Filters = (props) => {
    return (
        <section className="Filters">
            <div className="Filters-Left"> 
                <SearchBox regionFilter={props.regionFilterOn} selectedRegion={props.regionSelected} />
            </div>
            <div className="Filters-Right">
                <DropdownFilter />
            </div>
        </section>
    )
}

export default Filters