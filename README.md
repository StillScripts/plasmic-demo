This is a [Next.js](https://nextjs.org/) project using [Plasmic](https://www.plasmic.app/) for components. 

## Getting Started

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

- **Note** - You'll need to create your own components in Plasmic and a `.env.local` file with your **PROJECTID** and **APITOKEN** to get your components into the app. 

## Pages

The homepage is contained in `pages/index.tsx`. This page demonstrates the integration of a Plasmic component into a page that is using simple CSS for the rest of its elements.

A full page demo is contained in `pages/plasmic.tsx`. This uses a Plasmic page for all the content on the page. 

The page `pages/plasmic-host.tsx` is used for registering local components to the Plasmic project.

The design I created in Plasmic is based on this [Apple page](https://www.apple.com/au/iphone-13-pro/)

## Live Demo
View a live demo of this website using the components I made in Plasmic [here](https://plasmic-demo-stillscripts.vercel.app/) 
