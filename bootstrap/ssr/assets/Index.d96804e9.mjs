import { useState, useEffect } from "react";
import { L as Layout } from "./Layout.c72f4ea6.mjs";
import { a as jsxs } from "../ssr.mjs";
import "@inertiajs/inertia-react";
import "react-dom/server.js";
import "process";
import "http";
import "ziggy-js";
import "react/jsx-runtime.js";
function Index() {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setValue((value2) => value2 + 1), 1e3);
    return () => clearInterval(id);
  }, [setValue]);
  return /* @__PURE__ */ jsxs(Layout, {
    children: ["Index ", value]
  });
}
export {
  Index as default
};
