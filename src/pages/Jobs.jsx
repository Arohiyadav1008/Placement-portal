import { useState } from "react";
import JobCard from "../components/JobCard";
import { jobs } from "../data/jobs";

function Jobs() {
  const [search, setSearch] = useState("");

  const filteredJobs = jobs.filter((job) =>
    `${job.title} ${job.company} ${job.location}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <main className="content">

      <div className="page-heading">
        <h1>Available Jobs</h1>

        <p>
          Find placement opportunities matching your skills.
        </p>
      </div>

      {/* Search */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search jobs, companies or locations..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Jobs */}
      <div className="jobs-list">

        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
            />
          ))
        ) : (
          <div className="empty-state">
            <h3>No jobs found</h3>

            <p>
              Try searching for another job, company or location.
            </p>
          </div>
        )}

      </div>

    </main>
  );
}

export default Jobs;