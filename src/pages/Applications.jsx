import { useState } from "react";

function Applications() {
  const [applications] = useState([
    {
      id: 1,
      company: "Xcelore",
      role: "Software Developer",
      location: "Noida",
      salary: "₹6 LPA",
      appliedDate: "12 September 2026",
      status: "Applied",
    },
    {
      id: 2,
      company: "Deloitte",
      role: "Java Developer",
      location: "Gurgaon",
      salary: "₹7 LPA",
      appliedDate: "10 September 2026",
      status: "Interview",
    },
    {
      id: 3,
      company: "Tech Mahindra",
      role: "Frontend Developer",
      location: "Noida",
      salary: "₹5 LPA",
      appliedDate: "5 September 2026",
      status: "Rejected",
    },
  ]);

  const appliedCount = applications.filter(
    (app) => app.status === "Applied"
  ).length;

  const interviewCount = applications.filter(
    (app) => app.status === "Interview"
  ).length;

  const rejectedCount = applications.filter(
    (app) => app.status === "Rejected"
  ).length;

  return (
    <main className="content">
      {/* Page Header */}
      <div className="page-heading">
        <h1>My Applications</h1>
        <p>Track and manage your job applications.</p>
      </div>

      {/* Application Statistics */}
      <section className="application-stats">
        <div className="application-stat-card">
          <div className="application-stat-icon">📄</div>
          <div>
            <h2>{applications.length}</h2>
            <p>Total Applications</p>
          </div>
        </div>

        <div className="application-stat-card">
          <div className="application-stat-icon">📨</div>
          <div>
            <h2>{appliedCount}</h2>
            <p>Applied</p>
          </div>
        </div>

        <div className="application-stat-card">
          <div className="application-stat-icon">🎯</div>
          <div>
            <h2>{interviewCount}</h2>
            <p>Interviews</p>
          </div>
        </div>

        <div className="application-stat-card">
          <div className="application-stat-icon">❌</div>
          <div>
            <h2>{rejectedCount}</h2>
            <p>Rejected</p>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="applications-section">
        <div className="applications-section-header">
          <div>
            <h2>Recent Applications</h2>
            <p>Your latest placement applications</p>
          </div>
        </div>

        <div className="applications-list">
          {applications.length > 0 ? (
            applications.map((application) => (
              <div
                className="application-list-card"
                key={application.id}
              >
                {/* Company */}
                <div className="application-company">
                  <div className="application-logo">
                    {application.company.charAt(0)}
                  </div>

                  <div>
                    <h3>{application.role}</h3>
                    <p className="application-company-name">
                      {application.company}
                    </p>
                  </div>
                </div>

                {/* Job Information */}
                <div className="application-info">
                  <span>📍 {application.location}</span>
                  <span>💰 {application.salary}</span>
                  <span>
                    📅 Applied {application.appliedDate}
                  </span>
                </div>

                {/* Status + Action */}
                <div className="application-action">
                  <span
                    className={`application-status ${application.status.toLowerCase()}`}
                  >
                    {application.status}
                  </span>

                  <button className="application-view-btn">
                    View Details
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="application-empty-state">
              <div className="empty-icon">📄</div>
              <h3>No applications yet</h3>
              <p>
                Start applying to jobs to track your applications here.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default Applications;