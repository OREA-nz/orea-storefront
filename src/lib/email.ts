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

export interface EmailPayload {
  subject: string;
  from_name: string;
  from_email: string;
  [key: string]: string;
}

export interface EmailResult {
  ok: boolean;
  message: string;
}

export async function sendEmail(payload: EmailPayload): Promise<EmailResult> {
  const key = (import.meta.env.VITE_WEB3FORMS_KEY as string | undefined);

  if (!key) {
    console.info('[ORÉA Email - VITE_WEB3FORMS_KEY not set. Add to .env.local to enable real delivery.]', payload);
    return { ok: true, message: 'Dev mode: submission logged to console.' };
  }

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ access_key: key, ...payload }),
    });

    const data: { success: boolean; message?: string } = await res.json();

    if (!res.ok || !data.success) {
      return { ok: false, message: data.message ?? 'Submission failed. Please try again.' };
    }

    return { ok: true, message: 'Sent successfully.' };
  } catch {
    return { ok: false, message: 'Network error. Please check your connection and try again.' };
  }
}
