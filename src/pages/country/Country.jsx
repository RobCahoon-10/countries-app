import React, { useEffect }  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CountryDetails from '../../modules/countryDetails/CountryDetails';
import Header from '../../modules/header/Header';
import { LoadingCircle } from '../../components/loading/Loading';
import { countrySearch } from "../../redux/countrySlice";
import  { Redirect } from 'react-router-dom'

const Country = ({match:{params:{country}}}) => {
    const dispatch = useDispatch();
    const  { data, loading, error }  = useSelector((state) => state.country)

    useEffect(() => {
        dispatch(countrySearch(country, true));        
    }, [dispatch, country])
    
    if(error) {
        return <Redirect to='/Error'  />
    }

    return (
        <>
            <Header />

            <section className="CountryDetails">
                {loading ? (<LoadingCircle />) : (<CountryDetails content={data} />)}
            </section>
        </>
    )
}

export default Country