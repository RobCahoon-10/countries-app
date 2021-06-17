import React from 'react'
import Image from '../../components/image/Image'
import './CountryPanel.scss'

const CountryPanel = (props) => {

    return (
        <section className="CountryHolder">
            {props.content?.slice(0, props.count).map((item) => { 

                const {name, flag, population, region, capital} = item
                const imageData = {url: flag, altText: name }

                return (    
                    <div key={name} className="Country">
                        <Image className="Country-Flag" data={imageData} /> 
                        <ul className="Country-Details">
                            <li className="Country-Details-Name">{name}</li>
                            <li><strong>Population: </strong> {population}</li>
                            <li><strong>Region: </strong> {region}</li>
                            <li><strong>Capital: </strong> {capital}</li>
                        </ul>
                    </div>
                )
                
            })}

        </section>
    )
}

export default CountryPanel