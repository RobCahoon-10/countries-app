import React from 'react'
import './Loading.scss'

const LoadingCircle = () => (
    <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
)

const LoadingDots = () => (
    <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
)

export {
    LoadingCircle,
    LoadingDots
} 