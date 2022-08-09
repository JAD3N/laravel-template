/// <reference types="vite/client" />

import { RouteParamsWithQueryOverload, RouteParam, Config, Router } from 'ziggy-js';
// import { SetupOptions as BaseSetupOptions } from '@inertiajs/inertia-react';

declare global {
	function route(
		name?: undefined,
		params?: RouteParamsWithQueryOverload | RouteParam,
		absolute?: boolean,
		config?: Config,
	): Router;

	function route(
		name: string,
		params?: RouteParamsWithQueryOverload | RouteParam,
		absolute?: boolean,
		config?: Config,
	): string;
}

declare module '@inertiajs/inertia' {
	export interface PageProps {
		ziggy: Config;
	}
}
