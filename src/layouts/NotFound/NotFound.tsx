import { Text } from '@/components';
import styles from './NotFound.module.css';
export default function NotFound() {
	const title = ' Ups, we have an error';
	const text =
		'It seems to be the URL is wrong.  Why do you not try with something different?';

	return (
		<div className={styles.container}>
			<Text tag='h3' weight={700} color='primary' size='title' text={title} />
			<Text tag='h3' text={text} />
		</div>
	);
}
