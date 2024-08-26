import { defineConfig } from "vite";

export default defineConfig({
	optimizeDeps: {
		include: ["slidev-addon-jsfiddle > qr-code-styling"],
	},
});
