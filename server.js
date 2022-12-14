import express from "express";
import { createServer as createViteServer } from "vite";

const startServer = async () => {
  const app = express();

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "custom",
  });

  app.use(vite.middlewares);

  app.use("*", async (request, response, next) => {
    const path = request.originalUrl;

    try {
      const entryServerModule = await vite.ssrLoadModule(
        "/src/entry-server.tsx"
      );

      await entryServerModule.render({ path, request, response });
    } catch (error) {
      vite.ssrFixStacktrace(error);
      next(error);
    }
  });

  return { app };
};

startServer().then(({ app }) => {
  app.listen(3333);
});
