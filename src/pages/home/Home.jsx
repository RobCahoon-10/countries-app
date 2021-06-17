import React, { useEffect }  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CountryPanel from '../../modules/countryPanel/CountryPanel';
import Filter from '../../modules/filter/Filter';
import Header from '../../modules/header/Header';
import SearchBox from '../../modules/searchBox/SearchBox';
import { loadData } from "../../redux/countrySlice";

import './Home.scss'

const Home = (props) => {
    const dispatch = useDispatch();
    const  { data, loading, displayCount, regionFilterOn, regionSelected }  = useSelector((state) => state.country)

    useEffect(() => {
        dispatch(loadData());
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <Header />

            <section className="Filters">
                <div className="Filters-Left"> 
                    <SearchBox regionFilter={regionFilterOn} selectedRegion={regionSelected} />
                </div>
                <div className="Filters-Right">
                    <Filter />
                </div>
            </section>
            
            {!loading && <CountryPanel content={data} count={displayCount} /> }

        </div>
    )
}

export default Home