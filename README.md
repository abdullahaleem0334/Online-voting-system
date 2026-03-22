# Online-voting-system

A production-grade Online Voting System built with Node.js, MySQL, and Docker — deployed automatically on AWS using a Jenkins CI/CD pipeline.

![CI/CD](https://img.shields.io/badge/CI%2FCD-Jenkins-blue)
![Docker](https://img.shields.io/badge/Container-Docker-blue)
![AWS](https://img.shields.io/badge/Cloud-AWS%20EC2-orange)
![MySQL](https://img.shields.io/badge/Database-MySQL-blue)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green)

## 🌐 Live Demo
**http://13.232.123.47**

---

## 🏗️ Architecture

```
GitHub Push → Webhook → Jenkins Master
                              ↓
                       Jenkins Agent
                              ↓
                    Docker Image Build
                              ↓
                    Production Server (AWS EC2)
                              ↓
                         App is Live! ✅
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Backend | Node.js + Express |
| Frontend | HTML + CSS + JavaScript |
| Database | MySQL 8.0 |
| Container | Docker + Docker Compose |
| CI/CD | Jenkins |
| Infrastructure | Ansible |
| Cloud | AWS EC2 (3 instances) |
| Version Control | GitHub + Webhooks |

---

## ✨ Features

- ✅ Voter Registration with unique Voter ID
- ✅ JWT Authentication
- ✅ One vote per voter (duplicate prevention)
- ✅ Live results dashboard
- ✅ Real-time vote count
- ✅ Fully automated CI/CD pipeline
- ✅ Docker containerized deployment
- ✅ Persistent MySQL data with Docker volumes

---

## 🚀 CI/CD Pipeline

```
Developer pushes code to GitHub
        ↓
GitHub Webhook triggers Jenkins
        ↓
Jenkins Agent pulls latest code
        ↓
Docker image is built
        ↓
Image transferred to Production
        ↓
Docker Compose deploys containers
        ↓
App is live in seconds!
```

---

## 🖥️ Infrastructure Setup

```
jenkins-master  → Jenkins UI + Pipeline Manager
jenkins-agent   → Build server (Docker image builder)
production      → Live app server
```

---

## 📁 Project Structure

```
online-voting-system/
├── backend/
│   ├── src/
│   │   ├── app.js
│   │   ├── db.js
│   │   └── routes/
│   │       ├── auth.js
│   │       ├── candidates.js
│   │       └── vote.js
│   └── package.json
├── frontend/
│   └── index.html
├── Dockerfile
├── Jenkinsfile
├── docker-compose.yml
└── README.md
```

---

## 🔗 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/register | Register new voter |
| POST | /api/auth/login | Login voter |
| GET | /api/candidates | Get all candidates |
| POST | /api/vote | Cast vote |
| GET | /health | Health check |

---

## 👨‍💻 Author

**Abdullah Aleem**
- GitHub: [@abdullahaleem0334](https://github.com/abdullahaleem0334)

---

⭐ If you found this helpful, please give it a star!

GitHub pe README.md mein paste karo! 🚀
