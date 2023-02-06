import {defineConfig} from 'vite';
import {qwikVite} from '@builder.io/qwik/optimizer';
import {qwikCity} from '@builder.io/qwik-city/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import angular from '@analogjs/vite-plugin-angular';

export default defineConfig(() => {
	return {
		resolve: {
			mainFields: ['module'],
		},
		plugins: [
			qwikCity(),
			qwikVite(),
			tsconfigPaths(),
			angular({
				tsconfig: 'tsconfig.app.json',
				workspaceRoot: process.cwd()
			})],
		preview: {
			headers: {
				'Cache-Control': 'public, max-age=600',
			},
		},
	};
});