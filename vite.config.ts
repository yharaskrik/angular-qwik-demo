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
			qwikVite({
				ssr: {
					input: 'src/entry.ssr.jsx'
				}
			}),
			tsconfigPaths(),
			angular({
				tsconfig: 'tsconfig.json',
			}),
		],
		preview: {
			headers: {
				'Cache-Control': 'public, max-age=600',
			},
		},
	};
});
