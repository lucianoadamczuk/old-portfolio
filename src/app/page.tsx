import { TextSpinner } from '@/components';
import { Main } from '@/layouts';

export default function Home() {
	const path = 'Home';
	const src = '/assets/images/home.webp';
	const alt = 'Luciano Adamczuk';
	const subtitle = 'Being part of the IT world';
	const title = 'Luciano Adamczuk';
	const phrase = 'Frontend developer';

	return (
		<Main
			path={path}
			src={src}
			alt={alt}
			inverted
			subtitle={subtitle}
			title={title}
		>
			<TextSpinner phrase={phrase} />
		</Main>
	);
}
