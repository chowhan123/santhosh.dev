const Contact = require('../models/Contact');
const { Resend } = require('resend');

// Initialize Resend with API key from environment
const resend = new Resend(process.env.RESEND_API_KEY);

// Submit contact form
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
    console.log('💬 Message:', message.substring(0, 100));
    console.log('🕒 Time:', new Date().toLocaleString());
    console.log('🆔 ID:', contact._id);

    // Try to send emails using Resend
    if (process.env.RESEND_API_KEY) {
      try {
        // Send email to you (admin notification)
        const { data: adminEmail } = await resend.emails.send({
          from: 'Portfolio <onboarding@resend.dev>', // Resend's domain
          to: [process.env.ADMIN_EMAIL || 'santhoshnaik6929@gmail.com'],
          replyTo: email,
          subject: `🚀 Portfolio Contact: ${subject}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #3B82F6;">New Contact Form Submission</h2>
              <div style="background: #F3F4F6; padding: 20px; border-radius: 10px; margin: 20px 0;">
                <p><strong>From:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
              </div>
              <div style="background: white; padding: 20px; border: 1px solid #E5E7EB; border-radius: 10px;">
                <h3>Message:</h3>
                <p style="white-space: pre-wrap;">${message}</p>
              </div>
              <hr style="margin: 20px 0;">
              <p style="color: #9CA3AF; font-size: 12px;">
                Sent from your portfolio contact form at ${new Date().toLocaleString()}
              </p>
            </div>
          `
        });

        // Send auto-reply to sender
        const { data: userEmail } = await resend.emails.send({
          from: 'Santhosh <onboarding@resend.dev>',
          to: [email],
          subject: `✅ Thank you for contacting me, ${name}!`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #3B82F6;">Hi ${name}!</h2>
              <p>Thank you for reaching out through my portfolio. I've received your message and will get back to you within 24 hours!</p>
              
              <div style="background: #EFF6FF; padding: 15px; border-radius: 8px; border-left: 4px solid #3B82F6; margin: 20px 0;">
                <p style="margin: 0;"><strong>⏱️ Response Time:</strong> I typically reply within 24 hours</p>
              </div>

              <div style="background: #F9FAFB; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p style="color: #6B7280; margin-bottom: 10px;"><strong>Your Message:</strong></p>
                <p style="margin: 5px 0; color: #9CA3AF;"><strong>Subject:</strong> ${subject}</p>
                <p style="white-space: pre-wrap; margin-top: 10px;">${message}</p>
              </div>

              <p>Best regards,<br><strong>Santhosh</strong><br>Full Stack Developer</p>
              
              <hr style="margin: 20px 0; border: none; border-top: 1px solid #E5E7EB;">
              <p style="color: #9CA3AF; font-size: 12px;">📧 santhoshnaik6929@gmail.com</p>
            </div>
          `
        });

        console.log('✅ Emails sent successfully via Resend!');
        console.log('   Admin Email ID:', adminEmail?.id);
        console.log('   User Email ID:', userEmail?.id);
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

      } catch (emailError) {
        console.error('⚠️ Email sending failed:', emailError.message);
        console.log('💾 Message saved to database anyway\n');
      }
    } else {
      console.log('⚠️ RESEND_API_KEY not set - email disabled\n');
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

// Get all contact messages
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

// Delete a contact message
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