import server from '../dist/server/server.js';

const app = server.default ?? server;

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    return app.fetch(request, env, ctx);
  }
};
