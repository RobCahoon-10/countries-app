import React from 'react'
import { Link as RouterLink } from "react-router-dom"

const Link = props => {
    const {href, ...rest} = props

    if(href) {
        if(href.startsWith('http')){
            // External link
            return <a href={href} target='_blank' rel="noreferrer" {...rest}>{props.children}</a>
        } else {
            // Internal link
            return <RouterLink to={href} {...rest}>{props.children}</RouterLink>
        }
    } else {
        return null
    }
}

export default Link
