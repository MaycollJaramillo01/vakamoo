export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ok: false, error: 'Method not allowed' }),
    };
  }

  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ok: false, error: 'Missing secret' }),
    };
  }

  let token = '';
  let action = '';
  try {
    const body = JSON.parse(event.body || '{}');
    token = body.token || '';
    action = body.action || '';
  } catch {
    return {
      statusCode: 400,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ok: false, error: 'Invalid JSON' }),
    };
  }

  if (!token) {
    return {
      statusCode: 400,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ok: false, error: 'Missing token' }),
    };
  }

  const params = new URLSearchParams();
  params.set('secret', secret);
  params.set('response', token);

  const googleRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params.toString(),
  });
  const data = await googleRes.json();
  const scoreOk = typeof data.score !== 'number' || data.score >= 0.5;
  const actionOk = !action || !data.action || data.action === action;
  const ok = Boolean(data.success) && scoreOk && actionOk;

  return {
    statusCode: ok ? 200 : 403,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ok, score: data.score, action: data.action, success: data.success }),
  };
}
