import { L as Layout } from "./Layout.7fd56b4d.mjs";
import { j as jsx } from "../ssr.mjs";
import "@inertiajs/inertia-react";
import "react-dom/server.js";
import "process";
import "http";
import "ziggy-js";
import "react/jsx-runtime.js";
function About() {
  route("index");
  return /* @__PURE__ */ jsx(Layout, {
    children: "About"
  });
}
export {
  About as default
};
