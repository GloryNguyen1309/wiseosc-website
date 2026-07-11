import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY || 're_Wk7Vn9EV_KR3a3FTRswZRVHcXVkyzX5JX');

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email and message are required' },
        { status: 400 }
      );
    }

    console.log('Attempting to send email with Resend...');
    
    const data = await resend.emails.send({
      from: 'Wise Accelerate <onboarding@resend.dev>', // Use verified sender
      to: ['info@wiseaccelerate.com'],
      subject: `New Contact Form Submission from ${name}`,
      reply_to: email,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    console.log('Resend API response:', data);

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    // Log the detailed error for debugging
    console.error('Email error:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to send email', 
        details: error.message || 'Unknown error',
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined 
      },
      { status: 500 }
    );
  }
} 