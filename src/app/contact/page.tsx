import { ContactBox } from '@/components';
import { Main } from '@/layouts';
import { IIcons } from '@/types';
import { personalInformation } from '@/configuration';
import { cleanString } from '@/utilities';

export default function page() {
	const path = 'Contact';
	const src = '/assets/images/contact.webp';
	const alt = 'Luciano Adamzcuk';
	const subtitle = 'Time to action';
	const title = 'Contact';
	const contacts = [
		{ icon: 'phone', text: personalInformation.phone },
		{ icon: 'email', text: personalInformation.email },
		{ icon: 'location', text: personalInformation.location },
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
					const key = cleanString(c.icon + c.text);
					const icon = c.icon;
					const text = c.text;
					return <ContactBox key={key} icon={icon as IIcons} text={text} />;
				})}
			</div>
		</Main>
	);
}
