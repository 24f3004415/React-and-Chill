import React from 'react'
import styles from './ContactList.module.css'
import ContactCard from './ContactCard'
import { useState } from 'react'

const ContactList = () => {

    const [Contacts, setContacts] = useState([]);       // store Contacts
    const [search, setSearch] = useState("");   // for filter
    const [contactData, setcontactData] = useState({  // contact input form
        contactName: "",
        contactNumber: "",
        contactRelation: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate required fields
        if (!contactData.contactName.trim() || !contactData.contactNumber.trim() || !contactData.contactRelation) {
            alert("Please fill in all fields");
            return;
        }

        // Create new contact object with unique ID
        const newContact = {
            id: Date.now(), // Simple ID generation
            contactName: contactData.contactName.trim(),
            contactNumber: contactData.contactNumber.trim(),
            contactRelation: contactData.contactRelation
        };

        // Add contact to the list
        setContacts([...Contacts, newContact]);

        // Clear form
        setcontactData({
            contactName: "",
            contactNumber: "",
            contactRelation: ""
        });
    }

    // Handle input changes
    const handleInputChange = (field, value) => {
        setcontactData({ ...contactData, [field]: value });
    };

    // Filter contacts by name
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
                            <input
                                id="contactName"
                                type="text"
                                value={contactData.contactName}
                                onChange={(e) => handleInputChange('contactName', e.target.value)}
                                placeholder="Enter The Contact Name"
                                className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
                            />

                            <label htmlFor="contactNumber" className="block text-sm/6 font-medium">Contact Number:</label>
                            <input
                                id="contactNumber"
                                type="tel"
                                value={contactData.contactNumber}
                                onChange={(e) => handleInputChange('contactNumber', e.target.value)}
                                placeholder="Enter The Contact Number"
                                className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
                            />

                            <label htmlFor="relation" className="block text-sm/6 font-medium ">Relation:</label>
                            <select
                                id="relation"
                                name="relation"
                                value={contactData.contactRelation}
                                onChange={(e) => handleInputChange('contactRelation', e.target.value)}
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
                                className="bg-blue-600 mt-8 text-white rounded px-4 py-2"
                            >
                                Add Contact
                            </button>
                        </form>
                    </div>

                    <div className={styles.contactBook}>
                        <h1 className='font-mono mt-3 text-xl font-bold text-center underline'>
                            Contact Book
                        </h1>

                        <input
                            type="text"
                            placeholder="Search By contact Name..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full py-2 px-3 text-sm border border-gray-300 rounded-lg placeholder:text-gray-500 focus:outline-none focus:border-blue-500"
                        />

                        <div className={styles.anotherComponent}>

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
                </div>
            </div >
        </div >
    )
}

export default ContactList