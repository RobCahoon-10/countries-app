import React from 'react'
import Image from '../../components/image/Image'
import './CountryPanel.scss'

const CountryPanel = (props) => {

    console.log(props.content)

    return (
        <div className="Country">
            {/* <Image data={image} /> */}
            <ul>
                <li></li>
                <li>
                    <strong>Population:</strong>
                </li>
                <li>
                    <strong>Region:</strong>
                </li>
                <li>
                    <strong>Capital:</strong>
                </li>
            </ul>
        </div>
    )
}

export default CountryPanel