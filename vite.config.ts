import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import {plugin as vitePluginMarkdown, Mode} from 'vite-plugin-markdown';

export default defineConfig({
	plugins: [
		react(),
		vitePluginMarkdown({
			mode: [Mode.HTML],
		}),
	],
});