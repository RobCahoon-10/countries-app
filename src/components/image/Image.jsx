import React from 'react'

const Image = (props) => {
    const {data, ...rest} = props
    
    return (data)? <img {...rest} src={data.url} alt={data.altText ?? ""} /> : null
}

export default Image
