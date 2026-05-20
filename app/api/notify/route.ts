import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses'
import { NextRequest, NextResponse } from 'next/server'

const FROM = process.env.SES_FROM_EMAIL ?? 'notify@rootedhealthmember.com'
const REPLY_TO = 'rootedhealthormones@gmail.com'

type NotifyType = 'welcome' | 'booking_confirm' | 'quiz_complete' | 'membership_reminder'

interface NotifyPayload {
  type: NotifyType
  to: string
  name: string
  plan?: string
  bookingDate?: string
  bookingTime?: string
  quizResult?: string
}

function welcomeHtml(name: string) {
  return `
    <div style="font-family:'DM Sans',Arial,sans-serif;max-width:600px;margin:0 auto;background:#F7F4EE;">
      <div style="background:linear-gradient(135deg,#0F6E56,#1D9E75);padding:48px 40px;text-align:center;">
        <h1 style="font-family:Georgia,serif;color:#ffffff;font-size:36px;font-weight:400;margin:0;">Welcome to Rooted Health</h1>
        <p style="color:rgba(255,255,255,0.8);margin:12px 0 0;font-size:16px;">Hormone and Metabolic Medicine, Conway AR</p>
      </div>
      <div style="padding:40px;">
        <p style="color:#1E1D1A;font-size:16px;">Hi ${name},</p>
        <p style="color:#7A7870;line-height:1.7;">Welcome to Rooted Health. You're now part of a practice built around real care, transparent pricing, and no insurance barriers.</p>
        <p style="color:#7A7870;line-height:1.7;">Your next step is to complete your intake forms and schedule your first appointment through our patient portal.</p>
        <div style="text-align:center;margin:32px 0;">
          <a href="https://rootedhealth.janeapp.com/" style="background:#1D9E75;color:#ffffff;padding:14px 32px;border-radius:8px;text-decoration:none;font-weight:600;font-size:16px;display:inline-block;">Access Patient Portal</a>
        </div>
        <p style="color:#7A7870;font-size:14px;">Questions? Reply to this email or call us at <a href="tel:4798806148" style="color:#1D9E75;">(479) 880-6148</a>.</p>
      </div>
      <div style="border-top:1px solid #E2DDD4;padding:24px 40px;text-align:center;">
        <p style="color:#7A7870;font-size:12px;margin:0;">Rooted Health Hormones and MedSpa, LLC &bull; 1120 Hogan Lane Suite 2B, Conway AR 72032</p>
        <p style="color:#7A7870;font-size:12px;margin:8px 0 0;">This website does not collect protected health information. All clinical intake is handled through a secure patient portal.</p>
      </div>
    </div>
  `
}

function bookingConfirmHtml(name: string, date?: string, time?: string, plan?: string) {
  return `
    <div style="font-family:'DM Sans',Arial,sans-serif;max-width:600px;margin:0 auto;background:#F7F4EE;">
      <div style="background:linear-gradient(135deg,#0F6E56,#1D9E75);padding:48px 40px;text-align:center;">
        <h1 style="font-family:Georgia,serif;color:#ffffff;font-size:36px;font-weight:400;margin:0;">Appointment Confirmed</h1>
        <p style="color:rgba(255,255,255,0.8);margin:12px 0 0;font-size:16px;">Rooted Health Hormones and MedSpa</p>
      </div>
      <div style="padding:40px;">
        <p style="color:#1E1D1A;font-size:16px;">Hi ${name},</p>
        <p style="color:#7A7870;line-height:1.7;">Your appointment has been confirmed. Here are your details:</p>
        <div style="background:#ffffff;border:1px solid #E2DDD4;border-radius:12px;padding:24px;margin:24px 0;">
          ${date ? `<p style="margin:0 0 8px;"><strong style="color:#1E1D1A;">Date:</strong> <span style="color:#7A7870;">${date}</span></p>` : ''}
          ${time ? `<p style="margin:0 0 8px;"><strong style="color:#1E1D1A;">Time:</strong> <span style="color:#7A7870;">${time}</span></p>` : ''}
          ${plan ? `<p style="margin:0;"><strong style="color:#1E1D1A;">Plan:</strong> <span style="color:#7A7870;">${plan}</span></p>` : ''}
        </div>
        <p style="color:#7A7870;font-size:14px;line-height:1.7;"><strong style="color:#1E1D1A;">Location:</strong> 1120 Hogan Lane, Suite 2B, Conway, AR 72032<br/>Need to reschedule? Call <a href="tel:4798806148" style="color:#1D9E75;">(479) 880-6148</a> or manage your appointment in the patient portal.</p>
        <div style="text-align:center;margin:32px 0;">
          <a href="https://rootedhealth.janeapp.com/" style="background:#1D9E75;color:#ffffff;padding:14px 32px;border-radius:8px;text-decoration:none;font-weight:600;font-size:16px;display:inline-block;">Manage Appointment</a>
        </div>
      </div>
      <div style="border-top:1px solid #E2DDD4;padding:24px 40px;text-align:center;">
        <p style="color:#7A7870;font-size:12px;margin:0;">Rooted Health Hormones and MedSpa, LLC &bull; 1120 Hogan Lane Suite 2B, Conway AR 72032</p>
      </div>
    </div>
  `
}

function quizCompleteHtml(name: string, result?: string) {
  return `
    <div style="font-family:'DM Sans',Arial,sans-serif;max-width:600px;margin:0 auto;background:#F7F4EE;">
      <div style="background:linear-gradient(135deg,#0F6E56,#1D9E75);padding:48px 40px;text-align:center;">
        <h1 style="font-family:Georgia,serif;color:#ffffff;font-size:36px;font-weight:400;margin:0;">Your Membership Match</h1>
        <p style="color:rgba(255,255,255,0.8);margin:12px 0 0;font-size:16px;">Rooted Health Quiz Results</p>
      </div>
      <div style="padding:40px;">
        <p style="color:#1E1D1A;font-size:16px;">Hi ${name},</p>
        <p style="color:#7A7870;line-height:1.7;">Based on your quiz answers, here is your recommended plan:</p>
        ${result ? `<div style="background:#E1F5EE;border:2px solid #1D9E75;border-radius:12px;padding:24px;margin:24px 0;text-align:center;"><p style="color:#0F6E56;font-size:20px;font-weight:600;margin:0;">${result}</p></div>` : ''}
        <div style="text-align:center;margin:32px 0;">
          <a href="https://rootedhealthmember.com/memberships" style="background:#1D9E75;color:#ffffff;padding:14px 32px;border-radius:8px;text-decoration:none;font-weight:600;font-size:16px;display:inline-block;">See Full Plan Details</a>
        </div>
        <p style="color:#7A7870;font-size:14px;">Ready to get started? Book a free consultation at <a href="https://rootedhealth.janeapp.com/" style="color:#1D9E75;">rootedhealth.janeapp.com</a> or call <a href="tel:4798806148" style="color:#1D9E75;">(479) 880-6148</a>.</p>
      </div>
      <div style="border-top:1px solid #E2DDD4;padding:24px 40px;text-align:center;">
        <p style="color:#7A7870;font-size:12px;margin:0;">Rooted Health Hormones and MedSpa, LLC &bull; 1120 Hogan Lane Suite 2B, Conway AR 72032</p>
      </div>
    </div>
  `
}

function getSESClient() {
  const region = process.env.AWS_SES_REGION
  const accessKeyId = process.env.AWS_ACCESS_KEY_ID
  const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY

  if (!region || !accessKeyId || !secretAccessKey) return null

  return new SESClient({
    region,
    credentials: { accessKeyId, secretAccessKey },
  })
}

export async function POST(req: NextRequest) {
  const sesClient = getSESClient()
  if (!sesClient) {
    return NextResponse.json({ error: 'Email service not configured' }, { status: 503 })
  }

  let body: NotifyPayload
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const { type, to, name, plan, bookingDate, bookingTime, quizResult } = body

  if (!type || !to || !name) {
    return NextResponse.json({ error: 'Missing required fields: type, to, name' }, { status: 400 })
  }

  const emailMap: Record<NotifyType, { subject: string; html: string }> = {
    welcome: {
      subject: 'Welcome to Rooted Health',
      html: welcomeHtml(name),
    },
    booking_confirm: {
      subject: 'Your Rooted Health Appointment is Confirmed',
      html: bookingConfirmHtml(name, bookingDate, bookingTime, plan),
    },
    quiz_complete: {
      subject: 'Your Rooted Health Membership Match',
      html: quizCompleteHtml(name, quizResult),
    },
    membership_reminder: {
      subject: 'Your Rooted Health Membership Renewal',
      html: welcomeHtml(name),
    },
  }

  const email = emailMap[type]
  if (!email) {
    return NextResponse.json({ error: 'Unknown notification type' }, { status: 400 })
  }

  try {
    const command = new SendEmailCommand({
      Source: `Rooted Health <${FROM}>`,
      ReplyToAddresses: [REPLY_TO],
      Destination: { ToAddresses: [to] },
      Message: {
        Subject: { Data: email.subject, Charset: 'UTF-8' },
        Body: { Html: { Data: email.html, Charset: 'UTF-8' } },
      },
    })

    const result = await sesClient.send(command)
    return NextResponse.json({ success: true, id: result.MessageId })
  } catch (err) {
    console.error('Notify route error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
