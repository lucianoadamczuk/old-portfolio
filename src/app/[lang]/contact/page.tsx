import { ContactBox } from '@/components';
import { Main } from '@/layouts';
import { IIcons, IParams } from '@/types';
import { personalInformation } from '@/constants';
import { cleanString } from '@/utilities';
import { useTranslation } from '@/app/i18n';

interface Props {
	params: IParams;
}
export default async function Contact({ params }: Props) {
	const { t } = await useTranslation(params.lang, 'pages', {
		keyPrefix: 'contact',
	});
	const src = '/assets/images/contact.webp';
	const path = t('path', { ns: 'pages' });
	const alt = t('alt', { ns: 'pages' });
	const subtitle = t('subtitle', { ns: 'pages' });
	const title = t('title', { ns: 'pages' });

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
