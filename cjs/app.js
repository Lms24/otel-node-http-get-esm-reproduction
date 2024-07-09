const http = require("node:http");

// This http.get call creates a span in CJS
http.get("http://example.com", (res) => {
  res.on("data", (chunk) => {
    process.stdout.write(chunk);
  });
});

// This http.request call also creates a span in CJS
// const req = http.request("http://example.com", (res) => {
//   res.on("data", (d) => {
//     process.stdout.write(d);
//   });
// });
// req.end();

// exporter needs ~5s to export spans
setTimeout(() => {}, 10_000);
