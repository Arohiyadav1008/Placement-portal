# 🎓 Placement Portal

A modern and responsive **Placement Portal** built with React.js to help students explore job opportunities, view job details, apply for positions, track applications, and manage their profiles.

This project is currently developed as **Phase 1 — Frontend**, with a future plan to integrate a Node.js/Express backend and MySQL database.

---

## 📌 Project Overview

The Placement Portal provides a centralized interface for students to manage their placement activities.

Students can:

* View available placement opportunities
* Search for jobs by title, company, or location
* View detailed job information
* Check eligibility requirements
* View required skills
* Apply for jobs
* Track application status
* Manage their profile

### Application Flow

```text
Dashboard
    ↓
Jobs
    ↓
Job Details
    ↓
Apply
    ↓
Applications
    ↓
Profile
```

---

## 🛠️ Tech Stack

### Frontend

* **React.js**
* **JavaScript (ES6+)**
* **React Router DOM**
* **HTML5**
* **CSS3**

### Development Tools

* **Vite**
* **ESLint**
* **Git**
* **GitHub**
* **VS Code**

### Planned Backend

```text
Node.js
Express.js
MySQL
REST API
```

---

## 📂 Project Structure

```text
placement-portal/
│
├── public/
│
├── src/
│   │
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Sidebar.jsx
│   │   ├── StatCard.jsx
│   │   └── JobCard.jsx
│   │
│   ├── data/
│   │   └── jobs.js
│   │
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Jobs.jsx
│   │   ├── JobDetails.jsx
│   │   ├── Apply.jsx
│   │   ├── Applications.jsx
│   │   └── Profile.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/placement-portal.git
```

### 2. Navigate to the project

```bash
cd placement-portal
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

---

## 📦 Dependencies

The main dependency used for navigation is React Router DOM.

Install it using:

```bash
npm install react-router-dom
```

---

## 🧭 Routing

The application uses React Router for client-side navigation.

| Route           | Page             |
| --------------- | ---------------- |
| `/`             | Dashboard        |
| `/jobs`         | Available Jobs   |
| `/jobs/:id`     | Job Details      |
| `/apply/:id`    | Application Form |
| `/applications` | Applications     |
| `/profile`      | Student Profile  |

Dynamic routing allows different jobs to use the same Job Details component.

For example:

```text
/jobs/1
/jobs/2
/jobs/3
```

---

## 🧠 React Concepts Used

This project demonstrates several important React concepts:

### Components

Reusable components such as:

```text
Header
Sidebar
StatCard
JobCard
```

### Props

Job information is passed to reusable components:

```jsx
<JobCard job={job} />
```

### State

React `useState()` is used for:

* Job search
* Application form
* Profile form

### Routing

React Router handles navigation between pages.

### Dynamic Routes

```jsx
<Route
  path="/jobs/:id"
  element={<JobDetails />}
/>
```

### URL Parameters

```jsx
const { id } = useParams();
```

### Programmatic Navigation

```jsx
navigate("/applications");
```

---

## 📱 Responsive Design

The portal is designed to work across different screen sizes.

Responsive layouts are implemented using CSS media queries.

Supported layouts include:

```text
Desktop
Tablet
Mobile
```

---

## 🖥️ Screens

### Dashboard

```text
┌───────────────────────────────────────────────┐
│ 🎓 Placement Portal             👤 Arohi      │
├────────────┬──────────────────────────────────┤
│ Dashboard  │ Welcome, Arohi 👋                │
│ Jobs       │                                  │
│ Applications│  Jobs   Applied   Interviews   │
│ Profile    │   12       5          2          │
│ Logout     │                                  │
│            │ Available Jobs                   │
│            │ ┌──────────────────────────────┐ │
│            │ │ Software Developer            │ │
│            │ │ Xcelore • Noida              │ │
│            │ │ ₹6 LPA • CGPA 7+             │ │
│            │ │                   View Job   │ │
│            │ └──────────────────────────────┘ │
└────────────┴──────────────────────────────────┘
```

---

## 🔮 Future Improvements

The current version is frontend-only. Planned improvements include:

### Phase 2 — Backend

```text
React
  ↓
Node.js
  ↓
Express.js
  ↓
REST API
```

Planned functionality:

* User authentication
* Login/Register
* Protected routes
* Job APIs
* Application APIs
* Profile APIs
* Admin APIs

---

### Phase 3 — MySQL Database

Database tables will include:

```text
users
companies
jobs
applications
interviews
```

Example relationship:

```text
Users
  │
  │ applies
  ↓
Applications
  │
  │ belongs to
  ↓
Jobs
  │
  │ posted by
  ↓
Companies
```

---

### Phase 4 — Admin Dashboard

An admin/recruiter dashboard will allow authorized users to:

* Add jobs
* Update jobs
* Delete jobs
* View applicants
* Shortlist candidates
* Update application status
* Schedule interviews

---

### Phase 5 — Advanced Features

Potential future features:

* Resume upload
* Email notifications
* Interview scheduling
* Job eligibility filtering
* CGPA-based job recommendations
* Application deadline reminders
* Company profiles
* Placement statistics
* Student analytics
* Admin authentication
* Role-based access control

---

## 🎯 Learning Objectives

This project is designed to demonstrate practical knowledge of:

* React.js
* Component-based architecture
* React Hooks
* React Router
* State management
* Form handling
* Client-side filtering
* Responsive CSS
* REST API integration
* Database design
* Full-stack development

---

## 👩‍💻 Author

**Arohi Yadav**

B.Tech Computer Science & Engineering

---

## 📄 License

This project is created for educational and portfolio purposes.
