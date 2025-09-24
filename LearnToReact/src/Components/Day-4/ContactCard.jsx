import React from 'react'
import styles from './ContactCard.module.css'

const ContactCard = ({ contactName, contactNumber, contactRelation }) => {
    return (
        <div className={styles.contactsGrid}>
            <div className={styles.ContactBookDeatils}>
                <h2 className='text-lg font-semibold'>{ contactName }</h2>
                <p className='text-gray-500'> { contactNumber } </p>
                <p className='text-gray-800 font-semibold'> { contactRelation } </p>
            </div>

            
            
        </div>
    )
}

export default ContactCard
