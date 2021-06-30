import React from 'react'
import Link from '../../components/link/Link';
import Header from '../../modules/header/Header';
import './ErrorPage.scss'

const Error = (props) => {

    return (
        <>
            <Header />
            <section className="ErrorHolder">
                <h1>
                    Oops! Page not found!
                </h1>

                <Link href="/"> Back to Homepage </Link>
            </section>
        </>    
    )
}

export default Error