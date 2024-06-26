import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';

export const locales = {
	root: { label: 'English', lang: 'en' },
	de: { label: 'Deutsch', lang: 'de' },
	es: { label: 'Español', lang: 'es' },
	ja: { label: '日本語', lang: 'ja' },
	fr: { label: 'Français', lang: 'fr' },
	it: { label: 'Italiano', lang: 'it' },
	id: { label: 'Bahasa Indonesia', lang: 'id' },
	'zh-cn': { label: '简体中文', lang: 'zh-CN' },
	'pt-br': { label: 'Português do Brasil', lang: 'pt-BR' },
	'pt-pt': { label: 'Português', lang: 'pt-PT' },
	ko: { label: '한국어', lang: 'ko' },
	tr: { label: 'Türkçe', lang: 'tr' },
	ru: { label: 'Русский', lang: 'ru' },
	hi: { label: 'हिंदी', lang: 'hi' },
	da: { label: 'Dansk', lang: 'da' },
	uk: { label: 'Українська', lang: 'uk' },
};

/* https://vercel.com/docs/projects/environment-variables/system-environment-variables#system-environment-variables */
const VERCEL_PREVIEW_SITE =
	process.env.VERCEL_ENV !== 'production' &&
	process.env.VERCEL_URL &&
	`https://${process.env.VERCEL_URL}`;

const site = VERCEL_PREVIEW_SITE || 'https://zura.valzyofc.my.id/';

export default defineConfig({
	site,
	trailingSlash: 'always',
	integrations: [
		starlight({
			title: 'zurablog',
			logo: {
				light: '/src/assets/20240523_220550.png',
				dark: '/src/assets/20240523_220550.png',
				replacesTitle: true,
			},
			editLink: {
				baseUrl: 'https://github.com/withastro/starlight/edit/main/docs/',
			},
			social: {
				youtube: 'https://youtube.com/@valzyofc',
				instagram: 'https://www.instagram.com/@valzyycans',
				threads: 'https://www.threads.net/@valzyycans',
			},
			head: [
				{
					tag: 'script',
					attrs: {
						src: 'https://cdn.usefathom.com/script.js',
						'data-site': 'EZBHTSIG',
						defer: true,
					},
				},
				{
					tag: 'meta',
					attrs: { property: 'og:image', content: site + 'og.jpg?v=1' },
				},
				{
					tag: 'meta',
					attrs: { property: 'twitter:image', content: site + 'og.jpg?v=1' },
				},
			],
			customCss: process.env.NO_GRADIENTS ? [] : ['./src/assets/landing.css'],
			locales,
			sidebar: [
				{
					label: 'Start Here',
					translations: {
						de: 'Beginne hier',
						es: 'Comienza aqui',
						ja: 'ここからはじめる',
						fr: 'Commencez ici',
						it: 'Inizia qui',
						id: 'Mulai dari sini',
						'zh-CN': '从这里开始',
						'pt-BR': 'Comece Aqui',
						'pt-PT': 'Comece Aqui',
						ko: '여기서부터',
						tr: 'Buradan Başlayın',
						ru: 'Первые шаги',
						hi: 'यहाँ से शुरू करे',
						uk: 'Почніть звідси',
					},
					items: [
						{
							label: 'Getting Started',
							link: 'getting-started',
							translations: {
								de: 'Erste Schritte',
								es: 'Empezando',
								ja: '入門',
								fr: 'Mise en route',
								it: 'Iniziamo',
								id: 'Memulai',
								'zh-CN': '开始使用',
								'pt-BR': 'Introdução',
								'pt-PT': 'Introdução',
								ko: '시작하기',
								tr: 'Başlarken',
								ru: 'Введение',
								hi: 'पहले कदम',
								uk: 'Вступ',
							},
						},
						{
							label: 'Setup zurabot',
							link: 'manual-setup',
							badge: { text: 'TRENDING', variant: 'caution' },
							translations: {
								de: 'Manuelle Einrichtung',
								es: 'Configuración Manual',
								ja: '手動セットアップ',
								fr: 'Installation manuelle',
								// it: 'Manual Setup',
								id: 'Instalasi Manual',
								'zh-CN': '手动配置',
								'pt-BR': 'Instalação Manual',
								'pt-PT': 'Instalação Manual',
								ko: '수동으로 설정하기',
								tr: 'Elle Kurulum',
								ru: 'Установка вручную',
								hi: 'मैनुअल सेटअप',
								uk: 'Ручне встановлення',
							},
						},
						
					],
				},
				{
					label: 'Tutorial',
					badge: { text: 'coming soon', variant: 'danger' },
					translations: {
						de: 'Anleitungen',
						es: 'Guías',
						ja: 'ガイド',
						fr: 'Guides',
						it: 'Guide',
						id: 'Panduan',
						'zh-CN': '指南',
						'pt-BR': 'Guias',
						'pt-PT': 'Guias',
						ko: '가이드',
						tr: 'Rehber',
						ru: 'Руководства',
						hi: 'गाइड',
						uk: 'Ґайди',
					},
					autogenerate: { directory: 'tutorial' },
				},
			],
			plugins: process.env.CHECK_LINKS
				? [
						starlightLinksValidator({
							errorOnFallbackPages: false,
							errorOnInconsistentLocale: true,
						}),
				  ]
				: [],
		}),
	],
});
