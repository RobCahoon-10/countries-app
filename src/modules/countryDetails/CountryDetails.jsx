import React from 'react'
import Image from '../../components/image/Image'
import BackButton from '../../components/backButton/BackButton';
import './CountryDetails.scss'
import Borders from '../borders/Borders';

const CountryDetails = (props) => {

    const {flag, name, nativeName, population, region, subregion, capital} = props.content[0] ? props.content[0] : []
    const imageData = {url: flag, altText: name }
    const populationFormatted = (population) ? population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : population
    
    return (
        <>
        <BackButton className="CountryDetails-BackButton" />

        <div className="CountryDetails-Main">
            <div className="CountryDetails-Left">
                <Image className="CountryDetails-Flag" data={imageData} /> 
            </div>
            <div className="CountryDetails-Right">
                <h2 className="CountryDetails-Name">{name}</h2>

                <ul className="CountryDetails-List">
                    <li><span>Native Name:</span> {nativeName} </li>
                    <li><span>Population:</span> {populationFormatted} </li>
                    <li><span>Region:</span> {region} </li>
                    <li><span>Sub Region:</span> {subregion} </li>
                    <li><span>Capital:</span> {capital} </li>
                </ul>

                <ul className="CountryDetails-List">
                    <li>
                        <span>Top Level Domain:</span> 
                        <ArrayInfo className="Comma" data={props.content[0]?.topLevelDomain} />
                    </li>
                    <li>
                        <span>Currencies:</span> 
                        <ArrayInfo className="Comma" data={props.content[0]?.currencies} propertyName={"name"} />
                    </li>
                    <li>
                        <span>Languages:</span> 
                        <ArrayInfo className="Comma" data={props.content[0]?.languages} propertyName={"name"} />
                    </li>
                </ul>

                <div className="CountryDetails-BorderCountries">
                    <Borders data={props.content[0]?.borders} />
                </div>
            </div>
        </div>
        </>
    )
}

const ArrayInfo = ({data, propertyName, className}) => {

    let element = [];

    data?.map((item) => { 
        let property = (typeof propertyName === "undefined") ? item : item[propertyName]
    
        return (
            element.push(<span className={className} key={property}>{property}</span>)
        )
    })

    return element
}


export default CountryDetails