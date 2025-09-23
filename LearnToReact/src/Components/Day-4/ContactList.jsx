import React from 'react'
import styles from './ContactList.module.css'

const ContactList = () => {
    return (
        <div>
            <div>
                <h1 className='font-serif text-3xl tracking-wider font-bold text-center underline '>
                    Contact Book List
                </h1>
                <div className={styles.container} >
                    <div className={styles.AddContact} >
                        <form className={styles.form}>
                            <label for="username" class="block text-sm/6 font-medium">Contact Name:</label>

                            <input id="username" type="text" name="username" placeholder="Enter The Contact Name" class="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base placeholder:text-gray-500 focus:outline-none sm:text-sm/6" />

                            <label for="username" class="block text-sm/6 font-medium">Contact Number:</label>

                            <input id="username" type="text" name="username" placeholder="Enter The Contact Number" class="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base placeholder:text-gray-500 focus:outline-none sm:text-sm/6" />

                            <label for="country" class="block text-sm/6 font-medium ">Relation:</label>

                            <select
                                id="country"
                                name="country"
                                autoComplete="country-name"
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
                            className="w-full py-2 px-3 text-sm border border-gray-300 rounded-lg placeholder:text-gray-500 focus:outline-none focus:border-blue-500"
                        />

                        <div className={styles.contactsGrid}>
                            <div className={styles.ContactBookDeatils}>
                                <h2 className='text-lg font-semibold'>Contact Name</h2>
                                <p className='text-gray-500'>Contact Number</p>
                                <p className='text-gray-800 font-semibold'>relation</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div >
        </div >
    )
}

export default ContactList
