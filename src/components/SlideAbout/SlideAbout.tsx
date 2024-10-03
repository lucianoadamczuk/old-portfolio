import { v4 as uuidv4 } from 'uuid';
import styles from './SlideAbout.module.css';
import Text from '../Text/Text';

interface Props {
	title: string;
	items: string[];
}
export default function SlideAbout({ title, items }: Props) {
	return (
		<div className={styles.slideAbout}>
			<Text tag='h4' color='gray' weight={700} text={title} />
			<ul>
				{items.map((i) => {
					const key = uuidv4();
					const text = i;
					return (
						<Text
							key={key}
							tag='li'
							text={text}
							styles={{ marginTop: `var(--space-md)` }}
						/>
					);
				})}
			</ul>
		</div>
	);
}
