addEventListener("fetch", (event) => {
  event.respondWith(
    new Response(JSON.stringify(window), {
      status: 200,
      headers: {
        server: "denosr",
        "content-type": "text/plain",
      },
    }),
  );
});
