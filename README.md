#Dojo Helpdesk

A minimalist app made to manage tickets (todos) inside a company. A running build of the web app is hosted in [here](https://dojo-helpdesk.netlify.app).

![image](https://github.com/MateusSartorio/dojo-helpdesk/assets/69646100/2599d0dd-c682-4b8e-8641-1739c9987aba)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## How to setup app locally

First, clone the repo locally, making sure to clone the submodule (backend):

```bash
git clone https://github.com/MateusSartorio/dojo-helpdesk.git --recurse-submodules
```

In the directory you cloned the repo, run:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the app by modifying the files inside `app/` directory. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
