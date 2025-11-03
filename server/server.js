// server/server.js
// COMPLETE CORS FIX - GUARANTEED TO WORK

// Load environment variables FIRST
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const contactRoutes = require('./routes/contact');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Connect to MongoDB
connectDB();

// ============================================
// CORS FIX - SIMPLE AND EFFECTIVE
// ============================================

// Enable CORS for ALL origins with ALL methods
app.use(cors());

// Set headers manually for extra safety
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  
  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Max-Age', '86400'); // 24 hours
    return res.status(204).send();
  }
  
  next();
});

// ============================================
// BODY PARSING MIDDLEWARE
// ============================================

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ============================================
// ROUTES
// ============================================

// Root route
app.get('/', (req, res) => {
  res.json({ 
    message: 'Portfolio Backend API - Live!',
    status: 'running',
    cors: 'enabled',
    endpoints: {
      health: '/api/health',
      contact: '/api/contact (POST)'
    }
  });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Server is running',
    timestamp: new Date().toISOString(),
    cors: 'enabled for all origins'
  });
});

// Contact routes
app.use('/api/contact', contactRoutes);

// Error handling (must be last)
app.use(errorHandler);

// ============================================
// START SERVER
// ============================================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('='.repeat(50));
  console.log('🚀 Server Started Successfully!');
  console.log('='.repeat(50));
  console.log(`📍 Port: ${PORT}`);
  console.log(`🌐 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`📧 Contact API: /api/contact`);
  console.log(`💚 Health Check: /api/health`);
  console.log(`✅ CORS: Enabled for ALL origins`);
  console.log('='.repeat(50));
});