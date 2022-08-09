import { Link } from "@inertiajs/inertia-react";
import { j as jsx, F as Fragment, a as jsxs } from "../ssr.mjs";
function Layout({
  children
}) {
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsxs("main", {
      children: [/* @__PURE__ */ jsxs("header", {
        children: [/* @__PURE__ */ jsx(Link, {
          href: "/",
          children: "Home"
        }), /* @__PURE__ */ jsx(Link, {
          href: "/about",
          children: "About"
        })]
      }), /* @__PURE__ */ jsx("article", {
        children
      })]
    })
  });
}
export {
  Layout as L
};
