import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    // Log the incoming request
    const { name, email, message } = await request.json();
    console.log('Received request data:', { name, email, message });

    // Validate input
    if (!name || !email || !message) {
      console.warn('Validation failed: All fields are required.');
      return NextResponse.json(
        { message: 'All fields are required.' },
        { status: 400 }
      );
    }

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Use environment variable for user
        pass: process.env.EMAIL_PASS, // Use environment variable for password
      },
    });

    // Log transporter configuration
    console.log('Nodemailer transporter created:', {
      user: process.env.EMAIL_USER,
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER, // Use environment variable for sender
      to: 'vngelstudio@gmail.com', // Your email address or use an environment variable
      subject: `New Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };


    //remove this later
    if (process.env.NODE_ENV === 'development') {
      console.log('EMAIL_USER:', process.env.EMAIL_USER);
      console.log('EMAIL_PASS:', process.env.EMAIL_PASS);
    }
    

    // Log email options
    console.log('Email options:', mailOptions);

    // Send the email
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully!');
    
    return NextResponse.json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error in POST /api/contact:', error); // Log the error for debugging
    return NextResponse.json(
      { message: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
