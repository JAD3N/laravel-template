import React from "react";
import { render } from "react-dom";
import { InertiaProgress } from "@inertiajs/progress";
import { createInertiaApp } from "@inertiajs/inertia-react";
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

InertiaProgress.init();

createInertiaApp({
	resolve: name => resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx')),
    setup: ({ el, App, props }) => render(<App {...props} />, el),
});
