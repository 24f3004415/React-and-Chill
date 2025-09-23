import React from 'react'
import styles from './ContactCard.module.css'

const ContactCard = () => {
    return (
        <div className={styles.contactsGrid}>
            <div className={styles.ContactBookDeatils}>
                <h2 className='text-lg font-semibold'>Contact Name</h2>
                <p className='text-gray-500'>Contact Number</p>
                <p className='text-gray-800 font-semibold'>relation</p>
            </div>
            
        </div>
    )
}

export default ContactCard
