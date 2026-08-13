import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // Add contact globally (Resend's new Contacts model — no audienceId needed)
    const { error: contactError } = await resend.contacts.create({
      email,
    });

    if (contactError) {
      console.error('Resend contact error:', contactError);
      return NextResponse.json(
        { error: 'Failed to subscribe. Please try again.' },
        { status: 500 }
      );
    }

    // Send welcome email
    const { error: emailError } = await resend.emails.send({
      from: 'Netraform <onboarding@resend.dev>', // swap once your domain is verified
      to: [email],
      subject: 'Welcome to the Netraform newsletter',
      html: `
        <h2>Thanks for subscribing!</h2>
        <p>You'll now get updates from Netraform Technologies on new projects, insights, and releases.</p>
        <p>— The Netraform Team</p>
      `,
    });

    if (emailError) {
      // Contact was still added successfully, so don't fail the whole request
      console.error('Welcome email error:', emailError);
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error('Subscribe API error:', err);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    );
  }
}