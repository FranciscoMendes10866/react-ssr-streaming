import { Router } from "./router";

export const App = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>React SSR Streaming</title>
      </head>
      <body>
        <Router />
      </body>
    </html>
  );
};
