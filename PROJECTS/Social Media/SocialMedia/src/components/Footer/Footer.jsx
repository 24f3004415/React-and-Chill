import React from 'react'
import styles from './Footer.module.css'


const Footer = () => {
    return (
        <div className={styles.container}>
            <footer className="py-3 my-4 text-white-50">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><a href="#" className="nav-link px-2 ">Home</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 ">Features</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 ">Pricing</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 ">FAQs</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 ">About</a></li>
                </ul>
                <p className="text-center text-body-light">© 2025 Company, Inc</p>
            </footer>
        </div>
    )
}

export default Footer
