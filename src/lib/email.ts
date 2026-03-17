/**
 * ORÉA Email Utility — powered by Web3Forms (no backend required).
 *
 * Setup (one-time):
 *   1. Create a free account at https://web3forms.com
 *   2. Register hello@orea.co.nz as your destination email
 *   3. Copy your Access Key and add to .env.local:
 *        VITE_WEB3FORMS_KEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
 *
 * Without a key, submissions log to the console (dev/staging fallback).
 */

export interface EmailResult {
  ok: boolean;
  message: string;
}

// Send a hint email to a recipient
export async function sendHintEmail(payload: {
  senderName: string;
  senderEmail: string;
  receiverName: string;
  receiverEmail: string;
  productName: string;
  productUrl?: string;
  productImage?: string;
  message?: string;
}): Promise<EmailResult> {
  try {
    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'hint', ...payload }),
    });
    const data = await res.json();
    return data.ok
      ? { ok: true, message: 'Sent successfully.' }
      : { ok: false, message: data.message ?? 'Failed to send.' };
  } catch {
    return { ok: false, message: 'Network error. Please try again.' };
  }
}

// Schedule a gift reminder — sends internal notification to hello@orea.co.nz
export async function sendReminderEmail(payload: {
  name: string;
  email: string;
  productName: string;
  productUrl?: string;
  occasion: string;
  occasionDate: string;
  leadTime: string;
}): Promise<EmailResult> {
  try {
    // Send internal notification to ORÉA team
    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'internal',
        subject: `Gift Reminder Request — ${payload.name} | ${payload.occasion} on ${payload.occasionDate}`,
        details: payload,
      }),
    });
    const data = await res.json();
    return data.ok
      ? { ok: true, message: 'Reminder scheduled.' }
      : { ok: false, message: data.message ?? 'Failed to schedule.' };
  } catch {
    return { ok: false, message: 'Network error. Please try again.' };
  }
}

// Legacy compatibility — used by any remaining sendEmail() calls
export async function sendEmail(payload: Record<string, string>): Promise<EmailResult> {
  try {
    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'internal',
        subject: payload.subject ?? 'ORÉA Website Submission',
        details: payload,
      }),
    });
    const data = await res.json();
    return data.ok
      ? { ok: true, message: 'Sent successfully.' }
      : { ok: false, message: data.message ?? 'Failed to send.' };
  } catch {
    return { ok: false, message: 'Network error. Please try again.' };
  }
}