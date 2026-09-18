import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetails";
import Apply from "./pages/Apply";
import Applications from "./pages/Applications";
import Profile from "./pages/Profile";

import "./App.css";

function App() {

  return (
    <BrowserRouter>

      <Header />

      <div className="layout">

        <Sidebar />

        <Routes>

          <Route
            path="/"
            element={<Dashboard />}
          />

          <Route
            path="/jobs"
            element={<Jobs />}
          />

          <Route
            path="/jobs/:id"
            element={<JobDetails />}
          />

          <Route
            path="/apply/:id"
            element={<Apply />}
          />

          <Route
            path="/applications"
            element={<Applications />}
          />

          <Route
            path="/profile"
            element={<Profile />}
          />

        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;