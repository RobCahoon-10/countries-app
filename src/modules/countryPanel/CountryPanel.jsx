import React from 'react'
import Image from '../../components/image/Image'
import Link from '../../components/link/Link'
import './CountryPanel.scss'

const CountryPanel = (props) => {

    return (
        <>
            {props.content.map((item) => { 

                const {name, flag, population, region, capital} = item
                const imageData = {url: flag, altText: name }
                const href = "/country/" + name
                const populationFormatted = population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                
                return (    
                    <div key={name} className="Country">
                        <Link href={href}>
                            <Image className="Country-Flag" data={imageData} /> 
                        </Link>
                        <ul className="Country-Details">
                            <li className="Country-Details-Name">{name}</li>
                            <li><span>Population: </span> {populationFormatted}</li>
                            <li><span>Region: </span> {region}</li>
                            <li><span>Capital: </span> {capital}</li>
                        </ul>
                    </div>
                )
                
            })}            
        </>
    )
}

export default CountryPanel