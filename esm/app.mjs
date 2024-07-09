import * as http from "http";

console.log("typeof require", typeof require);

// This http.get call DOES NOT create a span in ESM
http.get("http://example.com", (res) => {
  res.on("data", (chunk) => {
    process.stdout.write(chunk);
  });
});

// This http.request call creates a span in ESM
// const req = http.request("http://example.com", (res) => {
//   res.on("data", (d) => {
//     process.stdout.write(d);
//   });
// });
// req.end();

// exporter needs ~5s to export spans
setTimeout(() => {}, 10_000);
