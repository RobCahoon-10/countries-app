import React, { useEffect }  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CountryDetails from '../../modules/countryDetails/CountryDetails';
import Header from '../../modules/header/Header';
import { LoadingCircle } from '../../components/loading/Loading';
import { countrySearch } from "../../redux/countrySlice";

import './Country.scss'

const Country = ({match:{params:{country}}}) => {
    const dispatch = useDispatch();
    const  { data, loading }  = useSelector((state) => state.country)

    useEffect(() => {
        dispatch(countrySearch(country, true));        
    }, [dispatch, country]) 

    return (
        <>
            <Header />

            <section className="CountryDetails">
                {loading && <LoadingCircle /> }
                {!loading && <CountryDetails content={data} />} 
            </section>
        </>
    )
}

export default Country