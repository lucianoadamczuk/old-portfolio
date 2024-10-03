import { Carousel, Main } from '@/layouts';

export default function AboutMe() {
	const path = 'About Me';
	const src = '/assets/images/about.webp';
	const alt = 'Luciano Adamczuk';
	const subtitle = 'Let me introduce myself';
	const title = 'About Me';
	const about = [
		{
			title: 'totñe',
			items: [
				'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime animi deleniti harum natus. Corporis sunt architecto',
				'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime animi deleniti harum natus. Corporis sunt architecto',
				'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime animi deleniti harum natus. Corporis sunt architecto',
			],
		},
		{
			title: 'totñe',
			items: [
				'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime animi deleniti harum natus. Corporis sunt architecto',
				'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime animi deleniti harum natus. Corporis sunt architecto',
				'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime animi deleniti harum natus. Corporis sunt architecto',
			],
		},
		{
			title: 'totñe',
			items: [
				'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime animi deleniti harum natus. Corporis sunt architecto',
				'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime animi deleniti harum natus. Corporis sunt architecto',
				'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime animi deleniti harum natus. Corporis sunt architecto',
			],
		},
	];
	return (
		<Main path={path} src={src} alt={alt} subtitle={subtitle} title={title}>
			<Carousel about={about} />
		</Main>
	);
}
