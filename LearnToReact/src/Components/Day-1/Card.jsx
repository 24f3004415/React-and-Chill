import React from 'react'

const Card = ({ bname, job, email, phone, image }) => {
    return (
        <div className='bg-gradient-to-l from-blue-200 to-yellow-200 shadow-xl rounded-5 p-6 w-full sm:w-96 texr-center hover:scale-105 transition mt-5 rounded ml-5 ' >
            <div>
                <img src={image} alt={bname} className='w-25 h-25 rounded-full border-4 border-indigo-500' />
            </div>

            <div>
                <h2 className='mt-4 text-xl font-bold text-gray-800'>
                    {bname}
                </h2>
                <p className='text-gray-500'>
                    {job}
                </p>
                <div className="mt-4 space-y-2">
                    <a
                        href={`mailto:${email}?subject=Hello&body=Hello I want to connect with you, please let me know if you are free.`}
                        className="w-full  p-3 bg-indigo-500 text-white py-2 rounded-lg m-3 hover:bg-indigo-600"
                    >
                        Email Me
                    </a>

                    <a
                        href={`tel:${phone}`}
                        className="w-full p-3 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
                    >
                        Call Me
                    </a>
                </div>

            </div>
        </div>
    )
}

export default Card
