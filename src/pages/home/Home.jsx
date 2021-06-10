import React, { useEffect }  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CountryPanel from '../../modules/countryPanel/CountryPanel';
import Header from '../../modules/header/Header';
import { loadData } from "../../redux/countrySlice";

import './Home.scss'

const Home = (props) => {
    const dispatch = useDispatch();
    // const countries = data.slice(0, 10)

    useEffect(() => {
        dispatch(loadData());
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const  { data }  = useSelector((state) => state.country)

    return (
        <div>
            <Header />
            
            {data && data?.map((item) => (
                <section className="Country-Panel">
                    <CountryPanel content={item} />
                </section>
            ))}

        </div>
    )
}

export default Home