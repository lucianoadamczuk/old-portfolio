import { useTranslation } from '@/app/i18n';
import { Carousel, Main } from '@/layouts';
import { IParams } from '@/types';

interface Props {
	params: IParams;
}
export default async function AboutMe({ params }: Props) {
	const { t } = await useTranslation(params.lang, 'pages', {
		keyPrefix: 'about-me',
	});
	const src = '/assets/images/about.webp';
	const path = t('path', { ns: 'pages' });
	const alt = t('alt', { ns: 'pages' });
	const subtitle = t('subtitle', { ns: 'pages' });
	const title = t('title', { ns: 'pages' });
	const carousel = t('carousel', { ns: 'pages', returnObjects: true });
	return (
		<Main path={path} src={src} alt={alt} subtitle={subtitle} title={title}>
			<Carousel about={carousel} />
		</Main>
	);
}
