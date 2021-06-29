import React, { useEffect }  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CountryPanel from '../../modules/countryPanel/CountryPanel';
import Filter from '../../modules/filter/Filter';
import Header from '../../modules/header/Header';
import SearchBox from '../../modules/searchBox/SearchBox';
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

            <section className="Filters">
                <div className="Filters-Left"> 
                    <SearchBox regionFilter={regionFilterOn} selectedRegion={regionSelected} />
                </div>
                <div className="Filters-Right">
                    <Filter />
                </div>
            </section>

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