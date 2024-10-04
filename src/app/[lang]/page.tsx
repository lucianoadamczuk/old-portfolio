import { useTranslation } from '@/app/i18n';
import { TextSpinner } from '@/components';
import { Main } from '@/layouts';
import { IParams } from '@/types';

interface Props {
	params: IParams;
}
export default async function Home({ params }: Props) {
	const { t } = await useTranslation(params.lang, ['pages', 'global']);
	const src = '/assets/images/home.webp';
	const path = t('home.path', { ns: 'pages' });
	const alt = t('home.alt', { ns: 'pages' });
	const subtitle = t('home.subtitle', { ns: 'pages' });
	const title = t('home.title', { ns: 'pages' });
	const reflectedText = t('home.phrase', { ns: 'pages' });
	const phrase = t('personalPhrase', { ns: 'global' });

	return (
		<Main
			path={path}
			src={src}
			alt={alt}
			inverted
			subtitle={subtitle}
			title={title}
			reflectedText={reflectedText}
		>
			<TextSpinner phrase={phrase} />
		</Main>
	);
}
