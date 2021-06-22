import React, { useEffect, }  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { countryBorders } from "../../redux/countrySlice";
import Link from '../../components/link/Link'
import { LoadingDots } from '../../components/loading/Loading';
import './Borders.scss'

const Borders = (props) => {

    const data = props.data
    const dispatch = useDispatch();
    const { borderNames, bordersLoading }  = useSelector((state) => state.country)

    useEffect(() => {
        if(data) dispatch(countryBorders(data)); 
    }, [dispatch, data]);

    return (
        <div className="Borders">
            <h3>Border Countries:</h3>
            
            { bordersLoading && <LoadingDots /> }

            {!bordersLoading && borderNames?.map((item) => { 
                const url = `/${item.name}`;
                return (
                    <Link key={item.name} href={url}>{item.name}</Link>
                )
            })}
        </div>
    )
}

export default Borders