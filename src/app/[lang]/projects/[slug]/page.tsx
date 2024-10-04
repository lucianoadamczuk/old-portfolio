import { useTranslation } from '@/app/i18n';
import { Icon, Pill, Text } from '@/components';
import { projects } from '@/constants';
import { Main } from '@/layouts';
import { IParams } from '@/types';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface Props {
	params: IParams;
}

export default async function ProjectSlug({ params }: Props) {
	const { t } = await useTranslation(params.lang, [
		'pages',
		'projects',
		'technologies',
	]);
	const alt = t('projects-slug.alt', { ns: 'pages' });
	const subtitle = t('projects-slug.subtitle', { ns: 'pages' });

	const projectFound = projects.find((p) => p.slug === params.slug);
	const projectDescription = t('projects', {
		ns: 'projects',
		returnObjects: true,
	}).find((p) => p.slug === params.slug)?.description;

	// handle errors
	if (!projectFound || !projectDescription) return notFound();

	// destructuring projectFopund after confirm it exists//
	const { src, title, slug, technologies, github, website } = projectFound;

	// function to get the technology selected when the users requires more details about it
	const getTechnology = (value: string) => {
		const technologySelected =
			t('technologies', {
				ns: 'technologies',
				returnObjects: true,
			}).find((t) => t.slug === value)?.text || '';
		return technologySelected;
	};

	return (
		<Main path={slug} src={src} alt={alt} subtitle={subtitle} title={title}>
			<Text tag='p' text={projectDescription} />

			{/* ------------------------------ technologies ------------------------------ */}
			<div
				style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-sm)' }}
			>
				{technologies.map((t) => {
					const key = t;
					const slug = t;
					const description = getTechnology(t);
					return <Pill key={key} slug={slug} description={description} />;
				})}
			</div>

			{/* ---------------------------------- links --------------------------------- */}
			<div style={{ display: 'flex', gap: 'var(--space-md)' }}>
				<Link href={github} target='_blank'>
					<Icon as='github' />
				</Link>
				<Link href={website} target='_blank'>
					<Icon as='globe' />
				</Link>
			</div>
		</Main>
	);
}
