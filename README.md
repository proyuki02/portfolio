# Portfolio

## Getting Started

First, run the development server:

```bash
npm run dev
```

## Development Note

```bash
npx create-next-app@latest portfolio --ts --use-npm

# @see: https://tailwindcss.com/docs/guides/nextjs
npm i -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# @see: https://zenn.dev/nakaatsu/articles/67ee1bd74f2f8b
npm i -D eslint-plugin-tailwindcss

# @see: https://daisyui.com/docs/install/
npm i daisyui

#
npm i -D prettier eslint-plugin-prettier eslint-config-prettier
```

---

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
