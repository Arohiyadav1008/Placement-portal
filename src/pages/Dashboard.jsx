import StatCard from "../components/StatCard";
import JobCard from "../components/JobCard";

function Dashboard() {
  return (
    <main className="content">

      <section className="welcome">
        <h1>Welcome, Arohi 👋</h1>
        <p>Track your placement journey from one place.</p>
      </section>

      <section className="stats">

        <StatCard
          number="12"
          label="Jobs"
        />

        <StatCard
          number="5"
          label="Applied"
        />

        <StatCard
          number="2"
          label="Interviews"
        />

      </section>

      <section className="jobs-section">

        <div className="section-header">
          <h2>Available Jobs</h2>

          <button className="view-all">
            View All
          </button>
        </div>

        <JobCard
          title="Software Developer"
          company="Xcelore"
          location="Noida"
          salary="₹6 LPA"
          eligibility="CGPA 7+"
        />

        <JobCard
          title="Frontend Developer"
          company="Tech Mahindra"
          location="Noida"
          salary="₹5 LPA"
          eligibility="CGPA 7+"
        />

        <JobCard
          title="Java Developer"
          company="Deloitte"
          location="Gurgaon"
          salary="₹7 LPA"
          eligibility="CGPA 7.5+"
        />

      </section>

    </main>
  );
}

export default Dashboard;