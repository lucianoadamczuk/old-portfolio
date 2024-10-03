import styles from './TopBar.module.css';
import { LanguageSwitcher, SocialMedias } from '@/widgets';

export default function TopBar() {
	return (
		<div className={styles.topBar}>
			<LanguageSwitcher />
			<SocialMedias />
		</div>
	);
}
