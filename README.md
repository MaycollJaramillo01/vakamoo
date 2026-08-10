# VAKAMOO

Astro site for [vakamoo.com](https://vakamoo.com/) — Japanese × Caribbean fusion restaurant.

## Commands

```bash
npm install
npm run dev
npm run build && npm run preview
```

## Structure

```
src/
  components/     Header, Footer, SEO, shared UI, home sections
  data/           Site copy, menu, legal
  layouts/        SiteLayout
  pages/          Routes
  styles/         global.css
public/media/     Brand images
```

## Pages

| Path | Description |
|------|-------------|
| `/` | Home |
| `/menu/` | Full menu by category |
| `/about-us/` | Story & kitchen |
| `/contact-us/` | Contact form & map |
| `/join-us/` | Careers form |
| Legal | Privacy, terms, cookies |

Forms submit via FormSubmit to `info@vakamoo.com` (confirm email on first use).

## reCAPTCHA v3

Copy `.env.example` to `.env` and set:

- `PUBLIC_RECAPTCHA_SITE_KEY` (public site key)
- `RECAPTCHA_SECRET_KEY` (server-only; never commit)

All forms run reCAPTCHA v3 before submit. On Netlify, `netlify/functions/verify-recaptcha` verifies the token with Google using the secret key.
