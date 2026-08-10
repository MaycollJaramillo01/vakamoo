function getSiteKey() {
  return window.__RECAPTCHA_SITE_KEY__ || '';
}

function waitForGrecaptcha() {
  return new Promise((resolve, reject) => {
    if (window.grecaptcha?.execute) {
      window.grecaptcha.ready(() => resolve(window.grecaptcha));
      return;
    }

    let tries = 0;
    const timer = setInterval(() => {
      tries += 1;
      if (window.grecaptcha?.execute) {
        clearInterval(timer);
        window.grecaptcha.ready(() => resolve(window.grecaptcha));
      } else if (tries > 50) {
        clearInterval(timer);
        reject(new Error('reCAPTCHA failed to load'));
      }
    }, 100);
  });
}

async function getToken(action) {
  const siteKey = getSiteKey();
  if (!siteKey) throw new Error('Missing reCAPTCHA site key');
  const grecaptcha = await waitForGrecaptcha();
  return grecaptcha.execute(siteKey, { action });
}

async function verifyToken(token, action) {
  try {
    const res = await fetch('/.netlify/functions/verify-recaptcha', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token, action }),
    });
    if (res.status === 404) return true;
    const data = await res.json();
    return Boolean(data.ok);
  } catch {
    return true;
  }
}

function setTokenField(form, token) {
  let input = form.querySelector('input[name="g-recaptcha-response"]');
  if (!input) {
    input = document.createElement('input');
    input.type = 'hidden';
    input.name = 'g-recaptcha-response';
    form.appendChild(input);
  }
  input.value = token;
}

function setSubmitting(form, busy) {
  const buttons = form.querySelectorAll('button[type="submit"], input[type="submit"]');
  buttons.forEach((btn) => {
    btn.disabled = busy;
    if (busy) btn.setAttribute('aria-busy', 'true');
    else btn.removeAttribute('aria-busy');
  });
}

function showError(form, message) {
  let error = form.querySelector('[data-recaptcha-error]');
  if (!error) {
    error = document.createElement('p');
    error.className = 'form-error';
    error.setAttribute('data-recaptcha-error', '');
    error.setAttribute('role', 'alert');
    form.prepend(error);
  }
  error.textContent = message;
}

export function bindRecaptchaForms() {
  document.querySelectorAll('[data-recaptcha-form]').forEach((form) => {
    if (form.dataset.recaptchaBound === '1') return;
    form.dataset.recaptchaBound = '1';

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      showError(form, '');

      const action = form.getAttribute('data-recaptcha-action') || 'submit';
      setSubmitting(form, true);

      try {
        const token = await getToken(action);
        const verified = await verifyToken(token, action);
        if (!verified) {
          throw new Error('Verification failed');
        }

        setTokenField(form, token);

        const storageKey = form.getAttribute('data-success-storage');
        if (storageKey) {
          try {
            localStorage.setItem(storageKey, '1');
          } catch {}
        }

        form.submit();
      } catch {
        showError(form, 'Security check failed. Please refresh and try again.');
        setSubmitting(form, false);
      }
    });
  });
}
