import styles from './SlideProject.module.css';
import Text from '../Text/Text';
import Link from 'next/link';

interface Props {
	slug: string;
	title: string;
	text: string;
}
export default function SlideProject({ slug, title, text }: Props) {
	return (
		<Link href={slug} className={styles.slideProject}>
			<Text tag='h4' weight={700} text={title} />
			<Text tag='p' text={text} />
		</Link>
	);
}
