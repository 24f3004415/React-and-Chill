import React from 'react'

const JobList = () => {
    return (
        <div className='max-w-3xl mx-auto p-6' >

            <h1 className='text-2xl font-bold mb-4 text-center' > Job Listings </h1>

            <form className='grid gap-4 p-4 border rounded bg-white shadow mb-6'>
                <input type="text" placeholder='Job Title' className='p-2 border-rounded' />
                <input type="text" placeholder='Job Description' className='p-2 border-rounded' />
                <input type="text" placeholder='Comapany NAme' className='p-2 border-rounded' />
                <input type="text" placeholder='Location' className='p-2 border-rounded' />

                <button type='submit' className='bg-blue-600 text-white p-3 rounded hover:bg-blue-800 transitions'>
                    Add JOB
                </button>
            </form>

            <input type="text" placeholder='Search by location...' className='' onChange={  } />

        </div>
    )
}

export default JobList
