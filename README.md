# 🔁 SWAPtitude

### 💡 A smart platform to exchange skills, powered by matchmaking, AI-like Genie, and Firebase.
## This is a project I have developed (solo) for the Odoo Hackathon 2025

---

## 🚀 Features

- 🧠 **Smart Matchmaking**: Find users who want what you offer, and offer what you want.
- 🤖 **AutoSwap Genie**: Suggests skill swaps based on match score + shared availability.
- 💾 **Profile Builder**: Users enter name, skills, and preferred availability.
- 📩 **Swap Requests**: Send, receive, accept or reject swap requests.
- 🏆 **Certificate Generator**: Download a PDF after a successful exchange.
- 🔐 **Login/Signup**: Dummy Firebase auth to simulate user accounts.
- 🌈 **Beautiful UI/UX**: Gradient backgrounds, glassmorphism, animations.

---


---

## 🛠️ Tech Stack

- **Frontend**: React + Vite
- **Styling**: Custom CSS + Tailwind-like classes
- **Database**: Firebase Firestore
- **Auth**: Firebase Authentication
- **PDF**: jsPDF
- **Deployment**: GitHub Pages / Firebase Hosting

---

## 📁 Folder Structure

├── src/
│ ├── components/
│ │ └── Navbar.jsx
│ ├── pages/
│ │ ├── Home.jsx
│ │ ├── Profile.jsx
│ │ ├── Browse.jsx
│ │ ├── MyRequests.jsx
│ │ ├── Account.jsx
│ │ └── Login.jsx
│ ├── firebase.js
│ └── App.jsx
├── public/
│ └── index.html
├── App.css
├── README.md
└── package.json



---

## 🧞 How the AutoSwap Genie Works

1. Calculates mutual skill matches.
2. Checks availability (e.g., Evenings, Weekends).
3. If score ≥ 2 **and** availability matches — it suggests the best swap.
4. One-click auto-request with Genie!

---

## 🧪 Test Credentials (if any)
Email: alisha123@gmail.com
Password: 1anshu19


---

## 🔧 How to Run Locally

```bash
git clone https://github.com/mahi-ag/SkillSwap.git
cd skillswap
npm install
npm run dev


Made with 💜 by Alisha Aggarwal
B.Tech CSE @ Bennett University
LinkedIn • GitHub

