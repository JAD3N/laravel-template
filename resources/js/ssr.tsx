import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { createInertiaApp } from '@inertiajs/inertia-react';
import createServer from '@inertiajs/server';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import route from 'ziggy-js';

const appName = 'Example App';

createServer(page =>
	createInertiaApp({
		page,
		render: ReactDOMServer.renderToString,
		title: (title) => `${title} - ${appName}`,
		resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx')),
		setup: ({ App, props }) => {
			global.route = ((name, params, absolute) => {
				route(name, params, absolute, {
					...page.props.ziggy,
					location: new URL(page.props.ziggy.url) as any,
				});
			}) as any;

			return <App {...props} />;
		},
	})
);
