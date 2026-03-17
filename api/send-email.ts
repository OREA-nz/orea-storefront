import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { type, ...data } = req.body;

    let emailPayload: any;

    if (type === 'hint') {
      emailPayload = {
        from: 'ORÉA <noreply@hint.orea.co.nz>',
        to: [data.receiverEmail],
        reply_to: data.senderEmail,
        subject: `A little hint from ${data.senderName}`,
        html: `
          <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 48px 32px; background: #FAF8F5; color: #2C2520;">
            <p style="font-size: 11px; letter-spacing: 0.3em; text-transform: uppercase; color: #B8A99A; margin-bottom: 32px;">ORÉA Fine Jewellery</p>
            <h1 style="font-size: 28px; font-weight: 300; font-style: italic; margin-bottom: 24px;">Dear ${data.receiverName},</h1>
            <p style="font-size: 16px; line-height: 1.8; color: #6B5E55; margin-bottom: 24px;">
              Someone who cares about you has shared something they would love for you to see.
            </p>
            <div style="border: 1px solid #E8DDD6; padding: 24px; margin: 32px 0; text-align: center;">
              <p style="font-size: 13px; letter-spacing: 0.2em; text-transform: uppercase; color: #2C2520; margin-bottom: 8px;">${data.productName}</p>
              ${data.productUrl ? `<a href="${data.productUrl}" style="font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #B8A99A;">View the Piece →</a>` : ''}
            </div>
            ${data.message ? `
            <div style="border-left: 1px solid #E8DDD6; padding-left: 20px; margin: 32px 0;">
              <p style="font-style: italic; color: #6B5E55; line-height: 1.8;">"${data.message}"</p>
              <p style="font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #B8A99A; margin-top: 12px;">— ${data.senderName}</p>
            </div>
            ` : ''}
            <p style="font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #B8A99A; margin-top: 48px; border-top: 1px solid #E8DDD6; padding-top: 24px;">
              With Love, ORÉA
            </p>
          </div>
        `,
      };
    } else if (type === 'reminder') {
      emailPayload = {
        from: 'ORÉA <noreply@hint.orea.co.nz>',
        to: [data.email],
        subject: `Your ORÉA reminder — ${data.occasion} in ${data.leadTime} days`,
        html: `
          <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 48px 32px; background: #FAF8F5; color: #2C2520;">
            <p style="font-size: 11px; letter-spacing: 0.3em; text-transform: uppercase; color: #B8A99A; margin-bottom: 32px;">ORÉA Fine Jewellery</p>
            <h1 style="font-size: 28px; font-weight: 300; font-style: italic; margin-bottom: 24px;">Dear ${data.name},</h1>
            <p style="font-size: 16px; line-height: 1.8; color: #6B5E55; margin-bottom: 24px;">
              A gentle reminder that your ${data.occasion.toLowerCase()} is coming up on <strong>${data.occasionDate}</strong>.
            </p>
            <div style="border: 1px solid #E8DDD6; padding: 24px; margin: 32px 0; text-align: center;">
              <p style="font-size: 13px; letter-spacing: 0.2em; text-transform: uppercase; color: #2C2520; margin-bottom: 8px;">${data.productName}</p>
              ${data.productUrl ? `<a href="${data.productUrl}" style="font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #B8A99A;">View the Piece →</a>` : ''}
            </div>
            <p style="font-size: 15px; line-height: 1.8; color: #6B5E55;">
              Our concierge team is available to assist with any questions.
            </p>
            <p style="font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #B8A99A; margin-top: 48px; border-top: 1px solid #E8DDD6; padding-top: 24px;">
              With Love, ORÉA
            </p>
          </div>
        `,
      };
    } else if (type === 'internal') {
      emailPayload = {
        from: 'ORÉA Website <noreply@hint.orea.co.nz>',
        to: ['hello@orea.co.nz'],
        subject: data.subject,
        html: `
          <div style="font-family: monospace; padding: 24px; background: #f5f5f5;">
            <h2 style="font-family: sans-serif;">${data.subject}</h2>
            <pre style="background: white; padding: 16px; border-radius: 4px; overflow: auto;">${JSON.stringify(data.details, null, 2)}</pre>
          </div>
        `,
      };
    } else {
      return res.status(400).json({ error: 'Invalid email type' });
    }

    const result = await resend.emails.send(emailPayload);

    if (result.error) {
      console.error('Resend error:', result.error);
      return res.status(500).json({ ok: false, message: result.error.message });
    }

    return res.status(200).json({ ok: true, id: result.data?.id });

  } catch (error) {
    console.error('Email send error:', error);
    return res.status(500).json({ ok: false, message: 'Failed to send email.' });
  }
}