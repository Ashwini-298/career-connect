#  CareerSync – Job Portal Clone

CareerSync is a frontend job portal application built using **ReactJS**. It allows candidates to browse job listings, upload resumes with role criteria, and lets employers manage job postings. The project demonstrates routing, component structure, state management, and dashboard functionality.

---

## Features Implemented

-  **Navbar** with routing to:
  - Home
  - Jobs
  - Upload Resume
  - Login

-  **Home Page** with navigation buttons

-  **Jobs Page**
  - Displays multiple job listings using `useState` and `.map()`
  - Each job includes title, level, location, description, and criteria
  - Click to view **Job Detail** using dynamic routing (`useParams`)

-  **Job Detail Page**
  - Shows full job description based on selected job ID

- **Upload Page**
  - Resume upload option with criteria selection: **Fresher** or **Experienced**
  - Conditional UI based on user choice

-  **Login Page**
  - Choose role: **Candidate** or **Employer**
  - Navigates to respective dashboard

-  **Candidate & Employer Dashboards**
  - Basic welcome UI for each role (to be extended later)

---

##  Technologies Used

- ReactJS
- React Router DOM (`useState`, `useEffect`, `useParams`)
- Functional Components & Conditional Rendering
- JSX and Basic CSS

---

## 🗂️ Folder Structure

