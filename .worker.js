export default {
  async fetch(request, env) {
    // Let Cloudflare Workers Static Assets handle all requests
    return env.ASSETS.fetch(request);
  },
};
