import { Text } from '@/components';
import styles from './AnimationMain.module.css';

interface Props {
	path: string;
}
export default function AnimationMain({ path }: Props) {
	return (
		<div className={styles.container}>
			<Text className={styles.text} tag='span' weight={700} text={path} />
		</div>
	);
}
