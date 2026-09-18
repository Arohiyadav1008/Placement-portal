import { Link, useParams } from "react-router-dom";
import { jobs } from "../data/jobs";

function JobDetails() {
  const { id } = useParams();

  const job = jobs.find(
    (job) => job.id === Number(id)
  );

  if (!job) {
    return (
      <main className="content">

        <h1>Job Not Found</h1>

        <Link to="/jobs" className="back-link">
          ← Back to Jobs
        </Link>

      </main>
    );
  }

  return (
    <main className="content">

      {/* Back button */}

      <Link
        to="/jobs"
        className="back-link"
      >
        ← Back to Jobs
      </Link>

      {/* Job details container */}

      <div className="job-details">

        {/* Header */}

        <div className="job-details-header">

          <div>

            <h1>{job.title}</h1>

            <p className="company">
              {job.company} • {job.location}
            </p>

          </div>

          <span className="job-type">
            {job.type}
          </span>

        </div>

        {/* Important information */}

        <div className="details-grid">

          <div className="detail-item">

            <span>Salary</span>

            <strong>
              {job.salary}
            </strong>

          </div>

          <div className="detail-item">

            <span>Minimum CGPA</span>

            <strong>
              {job.minCGPA}+
            </strong>

          </div>

          <div className="detail-item">

            <span>Application Deadline</span>

            <strong>
              {job.deadline}
            </strong>

          </div>

        </div>

        {/* Description */}

        <section className="details-section">

          <h2>Job Description</h2>

          <p>
            {job.description}
          </p>

        </section>

        {/* Skills */}

        <section className="details-section">

          <h2>Required Skills</h2>

          <div className="skills">

            {job.skills.map((skill) => (
              <span
                className="skill"
                key={skill}
              >
                {skill}
              </span>
            ))}

          </div>

        </section>

        {/* Apply */}

        <Link
          to={`/apply/${job.id}`}
          className="primary-btn apply-btn"
        >
          Apply Now
        </Link>

      </div>

    </main>
  );
}

export default JobDetails;