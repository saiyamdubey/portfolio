import { NextResponse } from 'next/server';
import { Resend } from 'resend';
const resend = new Resend("saiyamdubey8787@gmail.com");

export async function POST(req: Request) {
    const { name, email, message } = await req.json();
    await resend.sendEmail({
        from: 'Acme <onboarding@resend.dev>',
        to: 'saiyamdubey01@gmail.com',
        subject: 'hello world',
        text: JSON.stringify({ name, email, message }),
    });

    return NextResponse.json({
        status: 'ok',
    });
}
