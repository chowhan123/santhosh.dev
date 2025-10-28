// server/controllers/contactController.js
const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

// Create email transporter with better error handling
let transporter;
let emailEnabled = false;

try {
  // Verify credentials are loaded
  console.log('\n🔍 Checking Email Credentials:');
  console.log('EMAIL_USER:', process.env.EMAIL_USER);
  console.log('EMAIL_PASS exists:', !!process.env.EMAIL_PASS);
  console.log('EMAIL_PASS length:', process.env.EMAIL_PASS?.length || 0);

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    throw new Error('Email credentials missing in .env file');
  }

  transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // use TLS
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  // Verify transporter
  transporter.verify((error, success) => {
    if (error) {
      console.error('❌ Email transporter error:', error.message);
      console.log('\n💡 Email will be disabled. Messages will still save to database.');
      console.log('💡 To fix: Generate NEW Gmail App Password at:');
      console.log('   https://myaccount.google.com/apppasswords\n');
      emailEnabled = false;
    } else {
      console.log('✅ Email server is ready to send messages');
      emailEnabled = true;
    }
  });
} catch (error) {
  console.error('❌ Email setup error:', error.message);
  console.log('💡 Email disabled. Form will still work and save to database.\n');
  emailEnabled = false;
}

// @desc    Submit contact form
// @route   POST /api/contact
// @access  Public
const submitContactForm = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    }

    // Get client info
    const ipAddress = req.ip || req.connection.remoteAddress;
    const userAgent = req.get('user-agent');

    // Save to database
    const contact = await Contact.create({
      name,
      email,
      subject,
      message,
      ipAddress,
      userAgent
    });

    console.log('\n📬 NEW CONTACT FORM SUBMISSION:');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('👤 Name:', name);
    console.log('📧 Email:', email);
    console.log('📝 Subject:', subject);
    console.log('💬 Message:', message.substring(0, 100) + (message.length > 100 ? '...' : ''));
    console.log('🕒 Time:', new Date().toLocaleString());
    console.log('🆔 ID:', contact._id);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

    // Try to send emails if enabled
    if (emailEnabled && transporter) {
      try {
        // Email to admin (you)
        const adminMailOptions = {
          from: process.env.EMAIL_USER,
          to: process.env.ADMIN_EMAIL,
          replyTo: email,
          subject: `🚀 Portfolio Contact: ${subject}`,
          html: `
            <!DOCTYPE html>
            <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center; }
                .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
                .info-box { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #3B82F6; }
                .label { color: #6B7280; font-size: 14px; font-weight: bold; margin-bottom: 5px; }
                .value { color: #1F2937; font-size: 16px; margin-bottom: 15px; }
                .message-box { background: white; padding: 20px; border-radius: 8px; margin-top: 20px; }
                .footer { text-align: center; color: #9CA3AF; font-size: 12px; margin-top: 30px; }
                .button { display: inline-block; background: #3B82F6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; margin-top: 10px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1 style="margin: 0; font-size: 28px;">📬 New Contact Form Submission</h1>
                </div>
                <div class="content">
                  <div class="info-box">
                    <div class="label">FROM:</div>
                    <div class="value">${name}</div>
                    <div class="label">EMAIL:</div>
                    <div class="value">${email}</div>
                    <div class="label">SUBJECT:</div>
                    <div class="value">${subject}</div>
                  </div>
                  <div class="message-box">
                    <div class="label">MESSAGE:</div>
                    <div style="color: #374151; white-space: pre-wrap;">${message}</div>
                  </div>
                  <div style="text-align: center; margin-top: 20px;">
                    <a href="mailto:${email}?subject=Re: ${subject}" class="button">Reply to ${name}</a>
                  </div>
                </div>
                <div class="footer">
                  <p>Sent from your portfolio at ${new Date().toLocaleString()}</p>
                </div>
              </div>
            </body>
            </html>
          `
        };

        // Auto-reply to sender
        const autoReplyOptions = {
          from: process.env.EMAIL_USER,
          to: email,
          subject: `✅ Thank you for contacting me, ${name}!`,
          html: `
            <!DOCTYPE html>
            <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center; }
                .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1 style="margin: 0;">👋 Hi ${name}!</h1>
                  <p style="margin: 10px 0 0 0;">Thank you for reaching out</p>
                </div>
                <div class="content">
                  <p>I've received your message and I'll get back to you within 24 hours!</p>
                  <p style="margin-top: 20px;">Best regards,<br><strong>Santhosh</strong></p>
                </div>
              </div>
            </body>
            </html>
          `
        };

        // Send emails
        await Promise.all([
          transporter.sendMail(adminMailOptions),
          transporter.sendMail(autoReplyOptions)
        ]);

        console.log('✅ Emails sent successfully!\n');

      } catch (emailError) {
        console.error('⚠️ Email sending failed:', emailError.message);
        console.log('💾 Message saved to database anyway\n');
        // Don't fail the request if email fails
      }
    } else {
      console.log('⚠️ Email disabled - message saved to database only\n');
    }

    res.status(201).json({
      success: true,
      message: 'Thank you! Your message has been received. I\'ll get back to you soon!',
      data: {
        id: contact._id,
        name: contact.name,
        email: contact.email,
        subject: contact.subject
      }
    });

  } catch (error) {
    console.error('❌ Contact form error:', error);
    
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again or email me directly.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

// @desc    Get all contact messages
// @route   GET /api/contact
// @access  Public
const getAllMessages = async (req, res) => {
  try {
    const messages = await Contact.find()
      .sort({ createdAt: -1 })
      .limit(100);

    res.status(200).json({
      success: true,
      count: messages.length,
      data: messages
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch messages'
    });
  }
};

// @desc    Delete a contact message
// @route   DELETE /api/contact/:id
// @access  Private
const deleteMessage = async (req, res) => {
  try {
    const message = await Contact.findByIdAndDelete(req.params.id);

    if (!message) {
      return res.status(404).json({
        success: false,
        message: 'Message not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Message deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete message'
    });
  }
};

module.exports = {
  submitContactForm,
  getAllMessages,
  deleteMessage
};