import { v4 as uuidv4 } from 'uuid';
import AppLink from '@/components/AppLink/AppLink';
import styles from './Navbar.module.css';

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
				{routes.map((r) => {
					const key = uuidv4();
					const path = r.path;
					const text = r.name;

					return <AppLink key={key} path={path} text={text} />;
				})}
			</div>
		</nav>
	);
}
