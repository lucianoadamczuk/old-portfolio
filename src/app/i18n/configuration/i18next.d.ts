// import the original type declarations
import 'i18next';
// import all namespaces (for the default language, only)
import global from '../locales/en/global.json';
import pages from '../locales/en/pages.json';
import projects from '../locales/en/projects.json';
import technologies from '../locales/en/technologies.json';

declare module 'i18next' {
	// Extend CustomTypeOptions
	interface CustomTypeOptions {
		// custom namespace type, if you changed it
		defaultNS: 'ns1';
		// custom resources type
		resources: {
			global: typeof global;
			pages: typeof pages;
			projects: typeof projects;
			technologies: typeof technologies;
		};
	}
}
