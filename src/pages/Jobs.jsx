import { useState } from "react";
import { Link } from "react-router-dom";
import { jobs } from "../data/jobs";

function Jobs() {
  const [search, setSearch] = useState("");

  const filteredJobs = jobs.filter((job) =>
    `${job.title} ${job.company} ${job.location} ${job.skills.join(" ")}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <main className="content">
      {/* Page Header */}
      <div className="page-heading">
        <h1>Available Jobs</h1>
        <p>Find placement opportunities matching your skills.</p>
      </div>

      {/* Search */}
      <div className="jobs-search">
        <span className="search-icon">🔍</span>

        <input
          type="text"
          placeholder="Search jobs, companies or locations..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {search && (
          <button
            className="clear-search"
            onClick={() => setSearch("")}
          >
            ✕
          </button>
        )}
      </div>

      {/* Results Header */}
      <div className="jobs-result-header">
        <h2>
          {filteredJobs.length}{" "}
          {filteredJobs.length === 1 ? "Job" : "Jobs"} Available
        </h2>

        {search && (
          <p>
            Search results for "<strong>{search}</strong>"
          </p>
        )}
      </div>

      {/* Jobs */}
      <div className="jobs-list">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div className="job-list-card" key={job.id}>
              <div className="job-card-main">
                <div className="company-logo">
                  {job.company.charAt(0)}
                </div>

                <div className="job-card-info">
                  <h3>{job.title}</h3>

                  <p className="company-name">
                    {job.company}
                  </p>

                  <div className="job-details-row">
                    <span>📍 {job.location}</span>
                    <span>💰 {job.salary}</span>
                    <span>🎓 CGPA {job.minCGPA}+</span>
                  </div>

                  <div className="job-skills">
                    {job.skills.map((skill) => (
                      <span className="job-skill" key={skill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="job-card-action">
                <span className="job-type-badge">
                  {job.type}
                </span>

                <span className="deadline">
                  Deadline: {job.deadline}
                </span>

                <Link
                  to={`/jobs/${job.id}`}
                  className="primary-btn"
                >
                  View Job →
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="empty-state">
            <div className="empty-icon">🔍</div>
            <h3>No jobs found</h3>
            <p>
              We couldn't find any jobs matching "{search}".
            </p>

            <button
              className="secondary-btn"
              onClick={() => setSearch("")}
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
    </main>
  );
}

export default Jobs;