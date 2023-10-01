import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  const { email, name, message } = await request.json();
  console.log({ email, name, message });

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.NODEMAILER_EMAIL,
    replyTo: email,
    subject: `Message from ${name} (${email})`,
    text: message,
  };

  try {
    await transport.sendMail(mailOptions);
    console.log('success');
    return NextResponse.json({ message: 'Success', status: 200 });
  } catch (error) {
    console.log('error', error);
    return NextResponse.json({ message: 'Failed', status: 500 });
  }
}
