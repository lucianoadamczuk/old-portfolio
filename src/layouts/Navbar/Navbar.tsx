import AppLink from '@/components/AppLink/AppLink';
import styles from './Navbar.module.css';
import { cleanString } from '@/utilities';

export default function Navbar() {
	const routes = [
		{ name: 'Home', path: '/' },
		{ name: 'About Me', path: '/about-me' },
		{ name: 'projects', path: '/projects' },
		{ name: 'contact', path: '/contact' },
	];

	return (
		<nav className={styles.navbar}>
			<div className={styles.linksContainer}>
				{routes.map((r, index) => {
					const key = cleanString(r.name + index);
					const path = r.path;
					const text = r.name;

					return <AppLink key={key} path={path} text={text} />;
				})}
			</div>
		</nav>
	);
}
