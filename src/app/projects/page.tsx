import { SlideProject } from '@/components';
import { Main, ScrollBox } from '@/layouts';

export default function Projects() {
	const path = 'Projects';
	const src = '/assets/images/projects.webp';
	const alt = 'Luciano Adamczuk';
	const subtitle = 'Doing is learning';
	const title = 'Projects';
	return (
		<Main path={path} src={src} alt={alt} subtitle={subtitle} title={title}>
			<ScrollBox>
				<SlideProject slug='projects/algo' title='algo' text='ald' />
			</ScrollBox>
		</Main>
	);
}
