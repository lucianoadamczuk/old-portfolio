import { useTranslation } from '@/app/i18n';
import { SlideProject } from '@/components';
import { projects } from '@/constants';
import { Main, ScrollBox } from '@/layouts';
import { IParams } from '@/types';

interface Props {
	params: IParams;
}
export default async function Projects({ params }: Props) {
	const { t } = await useTranslation(params.lang, ['pages', 'projects']);
	const src = '/assets/images/home.webp';
	const path = t('projects.path', { ns: 'pages' });
	const alt = t('projects.alt', { ns: 'pages' });
	const subtitle = t('projects.subtitle', { ns: 'pages' });
	const title = t('projects.title', { ns: 'pages' });

	const getDescription = (value: string) => {
		const description = t('projects', {
			ns: 'projects',
			returnObjects: true,
		}).find((p) => p.slug === value);
		return description?.description || '';
	};

	return (
		<Main path={path} src={src} alt={alt} subtitle={subtitle} title={title}>
			<ScrollBox>
				{projects.map((p) => {
					const key = p.slug;
					const href = `/${params.lang}/projects/${p.slug}`;
					const title = p.title;
					const text = getDescription(p.slug);
					return (
						<SlideProject key={key} href={href} title={title} text={text} />
					);
				})}
			</ScrollBox>
		</Main>
	);
}
