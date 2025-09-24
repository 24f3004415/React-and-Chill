import React from 'react'
import styles from './ContactList.module.css'
import ContactCard from './ContactCard'
import { useState, useRef } from 'react'

const ContactList = () => {

    const [Contacts, setContacts] = useState([]);       // store Contacts
    const [search, setSearch] = useState("");   // for filter
    const [contactData, setcontactData] = useState({  // job input form
        contactName: "",
        contactNumber: "",
        contactRelation: "",
    });

    const setContactName = useRef();
    const setContactNumber = useRef();
    const setRelation = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const contactInput = setContactName.current.value;
        const NumberInput = setContactNumber.current.value;
        const RelationInput = setRelation.current.value;

        setContactName.current.value = ''
        setContactNumber.current.value = ''
        setRelation.current.value = ''

    }

    // Filter jobs by location
    const filteredContacts = Contacts.filter((contact) =>
        contact.contactName.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <div>
            <div>
                <h1 className='font-serif text-3xl tracking-wider font-bold text-center underline '>
                    Contact Book List
                </h1>
                <div className={styles.container} >
                    <div className={styles.AddContact} >
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <label htmlFor="contactName" className="block text-sm/6 font-medium">Contact Name:</label>

                            <input id="contactName" type="text" ref={setContactName}
                                value={contactData.contactName}
                                onChange={() => setcontactData({ ...contactData, contactName: setContactName.current.value })}
                                placeholder="Enter The Contact Name" className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base placeholder:text-gray-500 focus:outline-none sm:text-sm/6" />

                            <label htmlFor="contactNumber" className="block text-sm/6 font-medium">Contact Number:</label>

                            <input id="contactNumber" ref={setContactNumber} type="text"
                                value={contactData.contactNumber}
                                onChange={() => setcontactData({ ...contactData, contactNumber: setContactNumber.current.value })}
                                placeholder="Enter The Contact Number" className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base placeholder:text-gray-500 focus:outline-none sm:text-sm/6" />

                            <label htmlFor="country" className="block text-sm/6 font-medium ">Relation:</label>

                            <select
                                id="relation"
                                name="relation"
                                value={contactData.contactRelation}
                                onChange={() => setcontactData({ ...contactData, contactNumber: setContactNumber.current.value })}

                                ref={setRelation}
                                className="col-start-1 row-start-1 w-full rounded-md bg-white/5 p-2 outline-3 -outline-offset-2 outline-blue-500/100 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                            >
                                <option value="">Add Relation</option>
                                <option value="father">Father</option>
                                <option value="friend">Friend</option>
                                <option value="mother">Mother</option>
                                <option value="brother">Brother</option>
                                <option value="sister">Sister</option>
                                <option value="uncle">Uncle</option>
                                <option value="aunt">Aunt</option>
                                <option value="grandfather">Grand-Father</option>
                                <option value="grandmother">Grand-Mother</option>
                                <option value="cousin">Cousin</option>
                                <option value="niece">Niece</option>
                                <option value="nephew">Nephew</option>
                                <option value="son">Son</option>
                                <option value="daughter">Daughter</option>
                            </select>

                            <button
                                type="submit"
                                className="bg-blue-600 mt-8 text-white  rounded"
                            >
                                Add Contact
                            </button>

                        </form>
                    </div>

                    <div className={styles.contactBook}>
                        <h1 className='font-mono text-xl font-bold text-center underline'>
                            Contact Book
                        </h1>

                        <input
                            type="text"
                            placeholder="Search By contact Name..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full py-2 px-3 text-sm border border-gray-300 rounded-lg placeholder:text-gray-500 focus:outline-none focus:border-blue-500"
                        />


                        {filteredContacts.length > 0 ? (
                            filteredContacts.map((contact) => (
                                <ContactCard
                                    key={contact.id}
                                    contactName={contact.contactName}
                                    contactNumber={contact.contactNumber}
                                    contactRelation={contact.contactRelation}
                                />
                            ))
                        ) : (
                            <p className="text-gray-500">No Contacts found.</p>
                        )}

                    </div>
                </div>

            </div >
        </div >
    )
}

export default ContactList
