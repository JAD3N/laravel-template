import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { createInertiaApp } from '@inertiajs/inertia-react';
import createServer from '@inertiajs/server';
import { Page } from '@inertiajs/inertia';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import route, { Config } from 'ziggy-js';

const appName = 'Example App';

createServer(page =>
	createInertiaApp<{ ziggy: Config }>({
		page,
		render: ReactDOMServer.renderToString,
		title: (title) => `${title} - ${appName}`,
		resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx')),
		setup: ({ App, props }) => {
			// global.route = (name, params, absolute) => {
			// 	route(name, params, absolute, {
			// 		...page.props.ziggy as Config,
			// 		location: new URL(page.props.ziggy.url) as any,
			// 	});
			// };

			global.route = (...args) => route(...args);

			return <App {...props} />;
		},
	})
);
