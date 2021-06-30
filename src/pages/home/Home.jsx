import React, { useEffect }  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CountryPanel from '../../modules/countryPanel/CountryPanel';
import Header from '../../modules/header/Header';
import Filters from '../../modules/filters/Filters';
import { LoadingCircle } from '../../components/loading/Loading';
import { loadData } from "../../redux/countrySlice";
import './Home.scss'

const Home = () => {
    const dispatch = useDispatch();
    const  { data, loading, displayCount, regionFilterOn, regionSelected, error }  = useSelector((state) => state.country)

    useEffect(() => {
        dispatch(loadData());
    }, [dispatch]) 
    
    return (
        <>
            <Header />

            <Filters regionFilterOn={regionFilterOn} regionSelected={regionSelected} />

            <section className="CountryHolder">
                {error ? ( 
                    <h4 className="CountryHolder-NotFoundText">No countries found</h4>
                ) : (
                    loading ? (<LoadingCircle />) : (<CountryPanel content={data} count={displayCount} />)
                )}
            </section>
        </>
    )
}

export default Home