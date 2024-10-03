import { Icon, Pill, Text } from '@/components';
import { Main } from '@/layouts';

export default function page() {
	const src = '/assets/images/projects.webp';
	const alt = 'Project image';
	const subtitle = '- projects -';
	const title = 'Project name';
	const description =
		'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus repellendus assumenda quis voluptates optio deleniti dolorum tempore nesciunt nihil asperiores alias, quae error itaque non voluptatum corporis quibusdam! Quae, itaque!';

	return (
		<Main src={src} alt={alt} subtitle={subtitle} title={title}>
			<Text tag='p' text={description} />
			<div
				style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-sm)' }}
			>
				<Pill />
				<Pill />
				<Pill />
				<Pill />
			</div>
			<div style={{ display: 'flex', gap: 'var(--space-md)' }}>
				<Icon as='github' />
				<Icon as='globe' />
			</div>
		</Main>
	);
}
