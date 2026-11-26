
const manifest = {
  id: "org.nuvio.demo",
  version: "1.0.0",
  name: "Nuvio Stream Demo",
  description: "Addon stream latihan",
  resources: ["stream"],
  types: ["movie", "series"],
  catalogs: [],
  idPrefixes: ["tt"]
};

export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/manifest.json") {
      return Response.json(manifest);
    }

    if (/^\/stream\/(movie|series)\/[^/]+\.json$/.test(url.pathname)) {
      return Response.json({
        streams: [
          {
            name: "Demo Provider",
            title: "Stream latihan - bukan video asli",
            url: "https://example.com/demo.mp4"
          }
        ]
      });
    }

    return new Response("Nuvio Demo Addon", { status: 200 });
  }
};
