# Podcaster

An app that lets you view and play podcasts from iTunes.
## Engines
- Node ^18.17.1 (current LTS)
- Npm ^9.6.7
  
Tip: install nvm and get the current LTS node version

## Run Locally
~~NOTE: You need inditex .npmrc configuration set up correctly because the project was created with that configuration even if no private package is used.~~ FIXED by updating deps.

Clone the project

```bash
  git clone https://github.com/matteo-inditex/zara-com-podcasts.git
```

Go to the project directory

```bash
  cd zara-com-podcast
```

Install dependencies (you need inditex .npmrc configured correctly)

```bash
  npm install
```

Start the server

```bash
  npm run dev
```
App will be available on http://localhost/4173
## Build it and serve it
### Important: before proceeding, quit the dev server by typing q on the terminal where you typed the previous commands. The dev server and the build server run on the same port (4173) to avoid CORS errors.
```bash
  npm run build
```
```bash
  npm run preview
```
## Stack
- Vite
- React 18
- react-router-dom
- React-Query
- react-query-persist-client
- Chakra UI
