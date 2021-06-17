import React from 'react'
import Image from '../../components/image/Image'
import './CountryDetails.scss'

const CountryDetails = (props) => {

    const {flag, name, nativeName, population, region, subregion, capital} = props.content[0] ? props.content[0] : []
    const imageData = {url: flag, altText: name }

    return (
        <section className="CountryDetails">
        {flag && 
            <>
            <Image className="CountryDetails-Flag" data={imageData} /> 

            <h2 className="CountryDetails-Name">{name}</h2>

            <ul className="CountryDetails-List">
                <li><strong>Native Name:</strong> {nativeName}</li>
                <li><strong>Population:</strong> {population}</li>
                <li><strong>Region:</strong> {region}</li>
                <li><strong>Sub Region:</strong> {subregion}</li>
                <li><strong>Capital:</strong> {capital}</li>
            </ul>
            
            <ul className="CountryDetails-List">
                <li>
                    <strong>Top Level Domain:</strong> <ArrayInfo className="comma" data={props.content[0]?.topLevelDomain} />
                </li>
                <li>
                    <strong>Currencies:</strong> <ArrayInfo className="comma" data={props.content[0]?.currencies} propertyName={"name"} />
                </li>
                <li>
                    <strong>Languages:</strong> <ArrayInfo className="comma" data={props.content[0]?.languages} propertyName={"name"} />
                </li>
            </ul>

            <div className="CountryDetails-BorderCountries">
                <h3>Border Countries:</h3>

                <ArrayInfo className="" data={props.content[0]?.borders} />
            </div>
            
            </>
        
        }
        </section>
        
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