import { useState } from "react";
import {
  Link,
  useNavigate,
  useParams
} from "react-router-dom";

import { jobs } from "../data/jobs";

function Apply() {

  const { id } = useParams();

  const navigate = useNavigate();

  const job = jobs.find(
    (job) => job.id === Number(id)
  );

  const [formData, setFormData] = useState({
    name: "Arohi Yadav",
    email: "",
    phone: "",
    resume: ""
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    alert(
      `Application submitted for ${job.title}!`
    );

    navigate("/applications");
  };

  if (!job) {

    return (
      <main className="content">

        <h1>Job Not Found</h1>

        <Link
          to="/jobs"
          className="back-link"
        >
          ← Back to Jobs
        </Link>

      </main>
    );

  }

  return (
    <main className="content">

      {/* Back */}

      <Link
        to={`/jobs/${job.id}`}
        className="back-link"
      >
        ← Back to Job
      </Link>

      {/* Application container */}

      <div className="application-container">

        <div className="application-header">

          <h1>
            Apply for {job.title}
          </h1>

          <p>
            {job.company} • {job.location}
          </p>

        </div>

        <form onSubmit={handleSubmit}>

          {/* Name */}

          <div className="form-group">

            <label htmlFor="name">
              Full Name
            </label>

            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

          </div>

          {/* Email */}

          <div className="form-group">

            <label htmlFor="email">
              Email
            </label>

            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />

          </div>

          {/* Phone */}

          <div className="form-group">

            <label htmlFor="phone">
              Phone Number
            </label>

            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

          </div>

          {/* Resume */}

          <div className="form-group">

            <label htmlFor="resume">
              Resume Link
            </label>

            <input
              id="resume"
              type="url"
              name="resume"
              placeholder="https://drive.google.com/..."
              value={formData.resume}
              onChange={handleChange}
              required
            />

            <small>
              Add a Google Drive, portfolio or resume URL.
            </small>

          </div>

          {/* Submit */}

          <button
            type="submit"
            className="primary-btn submit-btn"
          >
            Submit Application
          </button>

        </form>

      </div>

    </main>
  );
}

export default Apply;