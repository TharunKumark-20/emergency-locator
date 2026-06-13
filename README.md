# 🚨 Emergency Assistance Locator

A full-stack web application that enables users to report, track, and monitor emergency incidents in real time. The system helps citizens quickly report emergencies such as accidents, fires, medical emergencies, and crimes while providing authorities with a centralized dashboard for monitoring and resolution.

## 🌐 Live Demo

**Frontend Application**
https://emergency-locator-frontend.onrender.com



---

## 📌 Features

### User Features

* Report emergency incidents
* Automatic geolocation capture
* Interactive map view of incidents
* Track incident status
* Filter incidents by status
* View incident details

### Admin Features

* Dashboard with real-time statistics
* Total incidents overview
* Pending and resolved incident counts
* Incident category analytics
* Mark incidents as resolved
* Monitor emergency reports

### Supported Emergency Types

* 🚗 Accident
* 🔥 Fire
* 🏥 Medical Emergency
* 🚔 Crime

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* React Router
* Axios
* React Leaflet
* OpenStreetMap

### Backend

* Django
* Django REST Framework
* SQLite

### Deployment

* Render (Frontend)
* Render (Backend)

---

## 📂 Project Structure

```text
emergency-locator/
│
├── backend/
│   ├── config/
│   ├── incidents/
│   ├── manage.py
│   └── db.sqlite3
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

## 🚀 Key Functionalities

### Report Incident

Users can submit emergency reports with:

* Emergency Type
* Description
* GPS Location

### Interactive Map

* Displays reported incidents on a map
* Uses OpenStreetMap integration
* Shows incident locations with markers

### Incident Tracking

* View all incidents
* Filter by Pending or Resolved
* Update incident status

### Dashboard Analytics

* Total Incidents
* Pending Incidents
* Resolved Incidents
* Category-wise statistics

---

## 🔄 API Endpoints

### Get All Incidents

```http
GET /api/incidents/
```

### Create New Incident

```http
POST /api/incidents/
```

### Update Incident Status

```http
PATCH /api/incidents/<id>/
```

---

## 📸 Screens

* Home Page
* Report Incident Page
* Track Incident Page
* Dashboard Analytics Page
* Interactive Incident Map

---

## 🎯 Future Enhancements

* User Authentication
* Role-Based Access Control
* Email Notifications
* SMS Alerts
* PostgreSQL Database
* Real-Time Updates
* Mobile Application
* AI-Based Incident Classification

---

## 👨‍💻 Author

Developed by Tharun Kumar

Emergency Assistance Locator is designed as a real-world emergency reporting and tracking system to demonstrate full-stack web development, REST API integration, geolocation services, and deployment workflows.
