import React, { useEffect, useState } from 'react'

const JobList = () => {

    const [jobs, setJobs] = useState([]);
    const [search, setSearch] = useState('');
    const [formdata, setFormdata] = useState({
        'title': "",
        'desc': "",
        'company': "",
        'location': "",
    }); // Jobs Input Boxes

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('jobs')) || []
        setJobs(saved);
    },[])

    useEffect(() => {
        localStorage.setItem("jobs", JSON.stringify(jobs))
    }, [jobs]);



    const handleSubmit = (event) => {
        event.preventDefault();

        if (!formdata.title || !formdata.company || !formdata.desc || !formdata.location) {
            alert('Please Fill all the details')
            return;
        }
        const newJob = {
            id: Date.now(),
            ...formdata
        }

        setJobs([newJob, ...Jobs])
        setFormdata({
            title: ' ',
            location: '',
            desc: '',
            company: ''

        });

        const filterData = jobs.filter((job) => job.location.toLowercase().includes(search.toLowercase()));
    }
    return (
        <div className='max-w-3xl mx-auto p-6' >

            <h1 className='text-2xl font-bold mb-4 text-center' > Job Listings </h1>

            <form className='grid gap-4 p-4 border rounded bg-white shadow mb-6' onSubmit={handleSubmit}>
                <input type="text" placeholder='Job Title' className='p-2 border-rounded' />
                <input type="text" placeholder='Job Description' className='p-2 border-rounded' />
                <input type="text" placeholder='Comapany NAme' className='p-2 border-rounded' />
                <input type="text" placeholder='Location' className='p-2 border-rounded' />

                <button type='submit' className='bg-blue-600 text-white p-3 rounded hover:bg-blue-800 transitions'>
                    Add JOB
                </button>
            </form>

            <input type="text" placeholder='Search by location...' className='w-full p-2 border rounded mb-2' />



        </div>
    )
}

export default JobList
