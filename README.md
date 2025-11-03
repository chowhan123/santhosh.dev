# 🚀 Portfolio Website - Santhosh

<div align="center">

![Portfolio](https://img.shields.io/badge/Portfolio-Live-success?style=for-the-badge&logo=vercel)
![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Latest-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-3+-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

**Modern Full-Stack Portfolio Website Built with MERN Stack**

[🌐 Live Demo](https://santhosh-dev.vercel.app)   • [💼 LinkedIn](https://www.linkedin.com/in/santhoshc1/)

</div>

---

## ✨ Features

- 🎨 **Modern Design** - Clean, professional UI with smooth animations
- 🌙 **Complete Dark Mode** - Persistent theme with smooth transitions
- 📱 **Fully Responsive** - Mobile-first design, works on all devices
- 💼 **Full-Stack MERN** - Complete backend with RESTful API
- 📧 **Working Contact Form** - Email notifications with auto-reply
- 🗄️ **MongoDB Integration** - Persistent data storage
- ⚡ **Performance Optimized** - Fast loading and smooth interactions
- 🔒 **Secure** - Input validation and environment protection
- 🔄 **Auto Deployment** - CI/CD with Vercel and Render

---

## 🛠️ Tech Stack

### **Frontend**
- React.js - UI framework
- Tailwind CSS - Utility-first styling
- Lucide React - Beautiful icons
- React Hooks - State management

### **Backend**
- Node.js - Runtime environment
- Express.js - Web framework
- MongoDB - NoSQL database
- Mongoose - ODM for MongoDB
- Resend - Email delivery service

### **Deployment**
- Vercel - Frontend hosting
- Render - Backend hosting
- MongoDB Atlas - Cloud database

---

## 🚀 Quick Start

### Prerequisites

- Node.js (v18+)
- npm or yarn
- MongoDB Atlas account
- Resend account (for emails)

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/chowhan123/santhosh.dev.git
cd santhosh.dev
```

**2. Install dependencies**
```bash
# Client
cd client
npm install

# Server
cd ../server
npm install
```

**3. Set up environment variables**

Create `server/.env`:
```env
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:3000
MONGO_URI=your_mongodb_connection_string
RESEND_API_KEY=your_resend_api_key
EMAIL_USER=your@email.com
ADMIN_EMAIL=your@email.com
JWT_SECRET=your_secret_key
```

**4. Start development servers**
```bash
# Terminal 1 - Backend
cd server
npm run dev

# Terminal 2 - Frontend
cd client
npm start
```

**5. Open browser**
```
http://localhost:3000
```

---

## 📂 Project Structure

```
portfolio-website/
├── client/                    # Frontend React App
│   ├── public/
│   │   └── images/           # Static images
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/      # Navbar, Footer, etc.
│   │   │   └── sections/    # Hero, About, Skills, etc.
│   │   ├── App.jsx
│   │   └── index.css
│   └── package.json
│
├── server/                   # Backend Node.js App
│   ├── config/              # Database config
│   ├── controllers/         # Business logic
│   ├── middleware/          # Error handling
│   ├── models/              # Database schemas
│   ├── routes/              # API routes
│   ├── server.js            # Entry point
│   └── package.json
│
└── README.md
```

---

## 🌐 API Endpoints

### Base URL
- **Development:** `http://localhost:5000`
- **Production:** `https://backend-portfolio-q4ar.onrender.com`

### Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | API information |
| GET | `/api/health` | Health check |
| POST | `/api/contact` | Submit contact form |
| GET | `/api/contact` | Get all messages (admin) |
| DELETE | `/api/contact/:id` | Delete message (admin) |

---

## 🚀 Deployment

### Frontend (Vercel)

1. Push code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Configure:
   - Root Directory: `client`
   - Build Command: `npm run build`
   - Output Directory: `build`
4. Add environment variable:
   ```
   REACT_APP_API_URL=https://your-backend.onrender.com
   ```
5. Deploy

### Backend (Render)

1. Create Web Service on [Render](https://render.com)
2. Configure:
   - Root Directory: `server`
   - Build Command: `npm install`
   - Start Command: `npm start`
3. Add environment variables (8 total)
4. Deploy

**Auto-deployment:** Both platforms redeploy automatically on git push!

---

## 👨‍💻 Author

**Santhosh**

- 🌐 Portfolio: [santhosh-dev.vercel.app](https://santhosh-dev.vercel.app)
- 💼 LinkedIn: [linkedin.com/in/yourusername](https://www.linkedin.com/in/santhoshc1/)
- 🐙 GitHub: [@chowhan123](https://github.com/chowhan123)
- 📧 Email: santhoshnaik6929@gmail.com
- 📱 Phone: +91 8106606929
- 📍 Location: Jaipur, Rajasthan, India

**B.Tech in Electronics and Communication Engineering**  
Malaviya National Institute of Technology, Jaipur (2022-2026)

---

## 🎯 Highlights

- 🏆 **3x Kabaddi Champion** - Team Captain at MNIT Jaipur
- 💻 **250+ DSA Problems** - LeetCode & GeeksforGeeks
- 🔧 **6+ Projects** - Full-stack applications with real-world impact
- 📚 **5+ Certifications** - MERN Stack, DSA, Cloud Computing

---

## 🙏 Acknowledgments

- Design inspiration from modern web trends
- Icons by [Lucide](https://lucide.dev/)
- Deployed with [Vercel](https://vercel.com/) and [Render](https://render.com/)
- Email service by [Resend](https://resend.com/)
- Database by [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

---

## 📞 Get in Touch

Interested in working together or have questions?

- 📧 **Email:** santhoshnaik6929@gmail.com
- 💬 **WhatsApp:** +91 8106606929
- 🔗 **LinkedIn:** Connect professionally
- 📱 **Portfolio:** Visit my live site

**Open to Full-Time Opportunities | Available for Freelance Projects**

---

## ⭐ Show Your Support

If you found this project helpful or interesting, please give it a ⭐ on GitHub!

<div align="center">

**Built with ❤️ and ☕ by Santhosh**

*Making the web beautiful, one commit at a time*

![Visitor Count](https://visitor-badge.laobi.icu/badge?page_id=chowhan123.santhosh.dev)
![GitHub Stars](https://img.shields.io/github/stars/chowhan123/santhosh.dev?style=social)
![GitHub Forks](https://img.shields.io/github/forks/chowhan123/santhosh.dev?style=social)

Last Updated: November 2025

</div>
