import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  preprocess: vitePreprocess(),
onwarn: (warning, handler) => {
    // Ignore all a11y warnings
    if (warning.code.startsWith('a11y-')) return;
    handler(warning);
}
};