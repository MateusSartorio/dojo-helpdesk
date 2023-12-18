# Dojo Helpdesk

A minimalist app made to manage tasks (tickets) and publish anouncements of a company. A running build of the web app is hosted in [here](https://dojo-helpdesk.netlify.app).

![image](https://github.com/MateusSartorio/dojo-helpdesk/assets/69646100/2599d0dd-c682-4b8e-8641-1739c9987aba)

![image](https://github.com/MateusSartorio/dojo-helpdesk/assets/69646100/dc44b4ac-ab87-445c-8e1b-5352db32bfab)

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

The application backend is hosted in [here](https://dojo-helpdesk-backend.onrender.com). If you prefer to run the backend locally, run ```npm start``` inside the ```dojo-helpdesk-backend``` directory, as follows:

```bash
cd dojo-helpdesk-backend
npm start
```

After that, change ```https://dojo-helpdesk-backend.onrender.com``` on the ```fetch``` calls to ```http://localhost:<port>```, where ```<port>``` is the port where your json-server is listening on.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
