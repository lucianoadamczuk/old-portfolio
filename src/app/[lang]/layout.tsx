import { Navbar, TopBar } from '@/layouts';
import '../../styles/index.css';

import { IParams } from '@/types';
import { dir } from 'i18next';
import { ReactNode } from 'react';
import { fallbackLng, languages } from '../i18n/configuration/settings';

export async function generateStaticParams() {
	return languages.map((lng) => ({ lng }));
}

interface MetadatProps {
	params: IParams;
}
export async function generateMetadata({ params }: MetadatProps) {
	let lang;
	if (!languages.includes(params.lang)) {
		lang = fallbackLng;
	} else {
		lang = params.lang;
	}

	const t = await import(`../i18n/locales/${lang}/global.json`);

	const title = t.metadata.title;
	const description = t.metadata.description;

	return { title, description };
}

interface Props {
	children: ReactNode;
	params: IParams;
}

export default function RootLayout({ children, params }: Props) {
	return (
		<html lang={params.lang} dir={dir(params.lang)}>
			<body>
				<TopBar />
				{children}
				<Navbar lang={params.lang} />
			</body>
		</html>
	);
}
