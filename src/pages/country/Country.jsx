import React, { useEffect }  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CountryDetails from '../../modules/countryDetails/CountryDetails';
import Header from '../../modules/header/Header';
import { countrySearch, countryBorders } from "../../redux/countrySlice";

import './Country.scss'

const Country = ({match:{params:{country}}}) => {
    const dispatch = useDispatch();
    const  { data, borderNames, loading }  = useSelector((state) => state.country)

    useEffect(() => {
        dispatch(countrySearch(country, true));        
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <Header />
            {!loading && <CountryDetails content={data} />} 
        </div>
    )
}

export default Country