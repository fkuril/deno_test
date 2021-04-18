let count = 0;
addEventListener("fetch", (event) => {
  count += 1;
  event.respondWith(
    new Response(JSON.stringify({...Object.keys(event), count,  }), {
      status: 200,
      headers: {
        server: "denosr",
        "content-type": "text/plain",
      },
    }),
  );
});
