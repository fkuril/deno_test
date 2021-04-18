addEventListener("fetch", (event) => {
  event.respondWith(
    new Response(JSON.stringify(Object.keys(window)), {
      status: 200,
      headers: {
        server: "denosr",
        "content-type": "text/plain",
      },
    }),
  );
});
