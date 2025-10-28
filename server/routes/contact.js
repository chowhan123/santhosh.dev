// server/routes/contact.js
const express = require('express');
const router = express.Router();
const {
  submitContactForm,
  getAllMessages,
  deleteMessage
} = require('../controllers/contactController');

router.post('/', submitContactForm);
router.get('/', getAllMessages);
router.delete('/:id', deleteMessage);

module.exports = router;