function JobCard({ title, company, location, salary, eligibility }) {
  return (
    <div className="job-card">
      <div>
        <h3>{title}</h3>

        <p>
          {company} • {location}
        </p>

        <span>
          {salary} • {eligibility}
        </span>
      </div>

      <button className="view-btn">
        View Job
      </button>
    </div>
  );
}

export default JobCard;