# Bug

When running an ESM node app, OpenTelemetry `HttpInstrumentation` does not create spans for `http.get` calls (from `node:http`). This works in CJS apps but doesn't in ESM. 

## Reproduction Steps

1. run `npm install`
2. run `npm run start:cjs` to observe `http.get` call span being printed to console
3. run `npm run start:esm` to observe `http.get` call span NOT being printed to console
4. uncomment `http.request` call in both, `esm` and `cjs` `app.js` files to observe that both start a span. 