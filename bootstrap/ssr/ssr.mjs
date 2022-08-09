import ReactDOMServer from "react-dom/server.js";
import { createInertiaApp } from "@inertiajs/inertia-react";
import require$$0 from "process";
import require$$1 from "http";
import route from "ziggy-js";
import * as jsxRuntime from "react/jsx-runtime.js";
var lib = {};
Object.defineProperty(lib, "__esModule", {
  value: true
});
var default_1 = lib.default = void 0;
var process = _interopRequireWildcard(require$$0);
var _http = require$$1;
function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function")
    return null;
  var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
  var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
  return (_getRequireWildcardCache = function(nodeInterop2) {
    return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
const readableToString = (readable) => new Promise((resolve, reject) => {
  let data = "";
  readable.on("data", (chunk) => data += chunk);
  readable.on("end", () => resolve(data));
  readable.on("error", (err) => reject(err));
});
var _default = (render, port) => {
  const _port = port || 13714;
  const routes = {
    "/health": async () => ({
      status: "OK",
      timestamp: Date.now()
    }),
    "/shutdown": () => process.exit(),
    "/render": async (request) => render(JSON.parse(await readableToString(request))),
    "/404": async () => ({
      status: "NOT_FOUND",
      timestamp: Date.now()
    })
  };
  (0, _http.createServer)(async (request, response) => {
    const dispatchRoute = routes[request.url] || routes["/404"];
    try {
      response.writeHead(200, {
        "Content-Type": "application/json",
        "Server": "Inertia.js SSR"
      });
      response.write(JSON.stringify(await dispatchRoute(request)));
    } catch (e) {
      console.error(e);
    }
    response.end();
  }).listen(_port, () => console.log("Inertia SSR server started."));
  console.log(`Starting SSR server on port ${_port}...`);
};
default_1 = lib.default = _default;
async function resolvePageComponent(path, pages) {
  const page = pages[path];
  if (typeof page === "undefined") {
    throw new Error(`Page not found: ${path}`);
  }
  return typeof page === "function" ? page() : page;
}
const Fragment = jsxRuntime.Fragment;
const jsx = jsxRuntime.jsx;
const jsxs = jsxRuntime.jsxs;
const appName = "Example App";
default_1((page) => createInertiaApp({
  page,
  render: ReactDOMServer.renderToString,
  title: (title) => `${title} - ${appName}`,
  resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, Object.assign({ "./pages/About.tsx": () => import("./assets/About.77c73144.mjs"), "./pages/Index.tsx": () => import("./assets/Index.10e73133.mjs") })),
  setup: ({
    App,
    props
  }) => {
    global.route = (name, params, absolute) => {
      route(name, params, absolute, {
        ...page.props.ziggy,
        location: new URL(page.props.ziggy.url)
      });
    };
    return /* @__PURE__ */ jsx(App, {
      ...props
    });
  }
}));
export {
  Fragment as F,
  jsxs as a,
  jsx as j
};
