import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import type { Request, Response } from "express";
import isbot from "isbot";

import { App } from "./App";

interface IRenderProps {
  path: string;
  request: Request;
  response: Response;
}

export const render = ({ path, request, response }: IRenderProps) => {
  const isCrawler = isbot(request.headers["user-agent"]);

  const { pipe, abort } = renderToPipeableStream(
    <StaticRouter location={path}>
      <App />
    </StaticRouter>,
    {
      onShellReady: () => {
        if (!isCrawler) {
          response.statusCode = 200;
          response.setHeader("content-type", "text/html");
          pipe(response);
        }
      },
      onShellError: () => {
        response.statusCode = 500;
        response.setHeader("content-type", "text/html");
        response.send("<h1>Something went wrong</h1>");
      },
      onError: (error: unknown) => {
        console.error(error);
      },
    }
  );

  setTimeout(abort, 5000);
};
