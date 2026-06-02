// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			components: {
				Footer: './src/components/Footer.astro',
			},
			title: 'Docs',
			logo: {
				src: './src/assets/Ruben_Terre_Logo_blanco_02062026.svg',
				replacesTitle: true,
			},
			customCss: ['./src/styles/custom.css'],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'MF0950 — Aplicaciones web',
					items: [{ autogenerate: { directory: 'guides/mf0950' } }],
				},
				{
					label: 'MF0951 — Programación web',
					items: [{ autogenerate: { directory: 'guides/mf0951' } }],
				},
				{
					label: 'MF0952 — Publicación web',
					items: [{ autogenerate: { directory: 'guides/mf0952' } }],
				},
				{
					label: 'Referencia',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
});
