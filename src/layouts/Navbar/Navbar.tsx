import AppLink from '@/components/AppLink/AppLink';
import styles from './Navbar.module.css';
import { cleanString } from '@/utilities';
import { IParams } from '@/types';
import { useTranslation } from '@/app/i18n';

interface Props {
	lang: IParams['lang'];
}

export default async function Navbar({ lang }: Props) {
	const { t } = await useTranslation(lang);
	const routes = t('routes', { ns: 'global', returnObjects: true });

	return (
		<nav className={styles.navbar}>
			<div className={styles.linksContainer}>
				{routes.map((r, index) => {
					const key = cleanString(r.name + index);
					const path = `/${lang}/${r.path}`;
					const text = r.name;

					return <AppLink key={key} path={path} text={text} />;
				})}
			</div>
		</nav>
	);
}
