import React from 'react'

import config from '../../config'

const Image = (props) => {
    const {data, ...rest} = props
    
    return (data)? <img {...rest} src={config.acoustic.domain + data.url} alt={data.asset.altText ?? ""} /> : null
}

export default Image
