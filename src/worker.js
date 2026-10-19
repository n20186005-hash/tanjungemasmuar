export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === 'www.tanjungemasmuar.com' || (url.hostname === 'tanjungemasmuar.com' && url.protocol === 'http:')) {
      url.hostname = 'tanjungemasmuar.com';
      url.protocol = 'https:';
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  }
};
