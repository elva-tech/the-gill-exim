# THE GILL EXIM — Global Agro Export Website

Marketing site for **THE GILL EXIM**, exporting premium Indian agricultural produce (onion, ginger, green chilli, garlic, pomegranate) to international buyers.

Built with **React 19**, **TanStack Start / Router**, **Tailwind CSS v4**, and **Motion**.

## Quick start

```bash
npm install
npm run dev    # or: npm run devv
```

Open [http://localhost:5173](http://localhost:5173) (port may vary if 5173 is in use).

## Contact form

Submissions are delivered by [Web3Forms](https://web3forms.com) — no backend required.

```bash
cp .env.example .env
```

Request an access key at [web3forms.com](https://web3forms.com) using the inbox that should
receive enquiries, put it in `.env` as `VITE_WEB3FORMS_ACCESS_KEY`, and add the same variable
in **Vercel → Settings → Environment Variables** so production works too.

Without the key the form refuses to submit and tells the visitor to email or call instead —
it never reports a false success.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` / `npm run devv` | Start development server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |

## Project structure

- `src/routes/` — File-based pages (home, about, products, contact, global export, …)
- `src/components/` — Header, footer, UI, global reach map
- `src/lib/site.ts` — Site copy, nav, products, export markets
- `src/assets/` — Product and hero images

## Deploy

After `npm run build`, deploy the generated output per your host (Vite + TanStack Start). For static hosting, configure your platform’s SPA/SSR settings accordingly.

## License

Private — THE GILL EXIM.
