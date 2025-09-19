import React from 'react'

const JobCard = ({ title, desc, company, location }) => {
    return (
        <div className='p-4 border rounded-lg shadow hover:shadow-lg transition bg-white'>
            <h2 className=' text-lg font-semibold ' > {title} </h2>
            <p className='text-gray-500' > {desc} </p>
            <p className='text-gray-800  font-semibold' > {company} </p>
            <p className='text-sm text-blue-600' > {location} </p>

            <button className='bg-blue-500  text-white font-semibold p-3 rounded hover:bg-blue-800 transition mt-2 ' > Apply Now</button>

        </div>
    )
}

export default JobCard
