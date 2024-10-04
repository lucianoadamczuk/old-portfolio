'use client';

import { useRouter } from 'next/navigation';
import Text from '../Text/Text';
import styles from './SlideProject.module.css';

interface Props {
	href: string;
	title: string;
	text: string;
}
export default function SlideProject({ href, title, text }: Props) {
	const router = useRouter();
	return (
		<div className={styles.slideProject} onClick={() => router.push(href)}>
			<Text tag='h4' weight={700} text={title} />
			<Text tag='p' text={text} className={styles.description} />
		</div>
	);
}
