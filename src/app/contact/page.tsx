import { v4 as uuidv4 } from 'uuid';
import { ContactBox } from '@/components';
import { Main } from '@/layouts';
import { IIcons } from '@/types';

export default function page() {
	const path = 'Contact';
	const src = '/assets/images/projects.webp';
	const alt = 'Luciano Adamzcuk';
	const subtitle = 'Time to action';
	const title = 'Contact';
	const contacts = [
		{ icon: 'phone', text: '+59 9 11 5337 6931' },
		{ icon: 'email', text: 'lucianoadamczuk@gmail.com' },
		{ icon: 'location', text: 'Buenos Aires, Argentina' },
	];
	return (
		<Main path={path} src={src} alt={alt} subtitle={subtitle} title={title}>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: 'var(--space-sm)',
				}}
			>
				{contacts.map((c) => {
					const key = uuidv4();
					const icon = c.icon;
					const text = c.text;
					return <ContactBox key={key} icon={icon as IIcons} text={text} />;
				})}
			</div>
		</Main>
	);
}
