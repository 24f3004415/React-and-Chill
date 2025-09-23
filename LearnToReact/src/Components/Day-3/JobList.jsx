import React, { useState, useEffect } from "react";
import JobCard from "./JobCard";

function JobList() {
  const [jobs, setJobs] = useState([]);       // store jobs
  const [search, setSearch] = useState("");   // for filter
  const [formData, setFormData] = useState({  // job input form
    title: "",
    company: "",
    location: "",
  });

  // Load jobs from localStorage on first render
  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem("jobs")) || [];
    setJobs(storedJobs);
  }, []);

  // Save jobs to localStorage whenever jobs change
  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.company || !formData.location) {
      alert("Please fill all fields!");
      return;
    }
    const newJob = { id: Date.now(), ...formData };
    setJobs([newJob, ...jobs]); // add new job on top
    setFormData({ title: "", company: "", location: "" }); // reset form
  };

  // Filter jobs by location
  const filteredJobs = jobs.filter((job) =>
    job.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-3xl mx-auto p-6 ">
      <h1 className="text-2xl font-bold mb-4 text-center">Job Listings</h1>

      {/* Job Form */}
      <div className="flex ">
        <div >
        <form
        onSubmit={handleSubmit}
        className="grid gap-4 p-4 border rounded bg-white shadow mb-6 flex"
      >
        <input
          type="text"
          placeholder="Job Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Company"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          className="p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Location"
          value={formData.location}
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          className="p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Add Job
        </button>
      </form>
      </div>

      {/* Search Input */}
      <div className="ml-5">
        <input
        type="text"
        placeholder="Search by location..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 border rounded mb-6"
      />

      {/* Job Cards */}
      <div className="grid gap-4 flex">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <JobCard
              key={job.id}
              title={job.title}
              company={job.company}
              location={job.location}
            />
          ))
        ) : (
          <p className="text-gray-500">No jobs found.</p>
        )}
      </div>
      </div>
      </div>
    </div>
  );
}

export default JobList;