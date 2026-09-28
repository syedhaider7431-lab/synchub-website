# SyncHub website

Single-page marketing site for SyncHub (Salesforce services agency). Next.js + Tailwind, exported as static HTML.

## Edit content

- Business details (domain, email, LinkedIn): `lib/site.ts`
- Sections: `components/` (Hero, Services, Process, CaseStudies, About, Faq, Contact, Footer)

## Run locally

```bash
npm install
npm run dev
```

## Build

`npm run build` writes the static site to `out/`.

## Deploy (GitHub Pages + GoDaddy domain)

Every push to `main` builds and deploys the site via `.github/workflows/deploy.yml`.

1. **Repo settings → Pages → Source:** GitHub Actions.
2. **Repo settings → Pages → Custom domain:** `synchub.digital`, then tick **Enforce HTTPS** once available.
3. **GoDaddy DNS** for synchub.digital (remove the default "Parked" A record, keep any MX records):
   - `A` `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` (four records)
   - `CNAME` `www` → `<your-github-username>.github.io`

## Contact form

Uses [Web3Forms](https://web3forms.com). Get a free access key with the email that should receive enquiries and put it in `web3formsKey` in `lib/site.ts`.
