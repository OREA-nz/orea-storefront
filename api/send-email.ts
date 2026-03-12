import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const config = {
  runtime: 'edge',
};

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const body = await req.json();
    const { type, ...data } = body;

    let emailPayload;

    if (type === 'hint') {
      emailPayload = {
        from: 'ORÉA <hello@orea.co.nz>',
        to: [data.receiverEmail],
        reply_to: data.senderEmail,
        subject: `A little hint from ${data.senderName}`,
        html: `
          <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 48px 32px; background: #FAF8F5; color: #2C2520;">
            <p style="font-size: 11px; letter-spacing: 0.3em; text-transform: uppercase; color: #B8A99A; margin-bottom: 32px;">ORÉA Fine Jewellery</p>
            <h1 style="font-size: 28px; font-weight: 300; font-style: italic; margin-bottom: 24px;">Dear ${data.receiverName},</h1>
            <p style="font-size: 16px; line-height: 1.8; color: #6B5E55; margin-bottom: 24px;">
              Someone who cares about you has shared something they'd love for you to see.
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
        from: 'ORÉA <hello@orea.co.nz>',
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
              We have noted your interest and our concierge team is available to assist with any questions.
            </p>
            <p style="font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #B8A99A; margin-top: 48px; border-top: 1px solid #E8DDD6; padding-top: 24px;">
              With Love, ORÉA
            </p>
          </div>
        `,
      };
    } else if (type === 'internal') {
      // Internal notification to hello@orea.co.nz (for reminder scheduling)
      emailPayload = {
        from: 'ORÉA Website <hello@orea.co.nz>',
        to: ['hello@orea.co.nz'],
        subject: data.subject,
        html: `
          <div style="font-family: monospace; padding: 24px; background: #f5f5f5;">
            <h2>${data.subject}</h2>
            <pre style="background: white; padding: 16px; border-radius: 4px;">${JSON.stringify(data.details, null, 2)}</pre>
          </div>
        `,
      };
    } else {
      return new Response(JSON.stringify({ error: 'Invalid email type' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const result = await resend.emails.send(emailPayload);

    return new Response(JSON.stringify({ ok: true, id: result.data?.id }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Email send error:', error);
    return new Response(JSON.stringify({ ok: false, message: 'Failed to send email.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}