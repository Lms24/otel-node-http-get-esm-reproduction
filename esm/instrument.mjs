import * as opentelemetry from "@opentelemetry/sdk-node";
import { ConsoleSpanExporter } from "@opentelemetry/sdk-trace-node";
import { HttpInstrumentation } from "@opentelemetry/instrumentation-http";
import { diag, DiagConsoleLogger, DiagLogLevel } from "@opentelemetry/api";
import moduleModule from "module";

const sdk = new opentelemetry.NodeSDK({
  traceExporter: new ConsoleSpanExporter(),
  instrumentations: [new HttpInstrumentation()],
});

moduleModule.register(
  "@opentelemetry/instrumentation/hook.mjs",
  import.meta.url
);

sdk.start();

diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.WARN);
