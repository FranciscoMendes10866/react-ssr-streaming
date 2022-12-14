import { Router } from "./router";

export const App = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css"
        />
        <title>React SSR Streaming</title>
      </head>
      <body>
        <Router />
        {/* These scripts don't exist, it's just for testing the streaming */}
        <script src="/main.js" async />
        <script src="/bundle.js" async />
      </body>
    </html>
  );
};
