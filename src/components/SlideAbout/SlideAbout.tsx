'use client';

import Text from '../Text/Text';
import styles from './SlideAbout.module.css';
import { cleanString } from '@/utilities';

interface Props {
	title: string;
	items: string[];
	isVisible: boolean;
}
export default function SlideAbout({ title, items, isVisible }: Props) {
	return (
		<div className={styles.slideAbout}>
			<Text tag='h4' color='gray' weight={700} text={title} />
			<ul>
				{items.map((i, index) => {
					const key = cleanString(i + index);
					const text = i;
					const transform = isVisible ? 'translateX(0%)' : `translateX(30%)`;
					const opacity = isVisible ? 1 : 0;
					const delay = `${index * 0.3}s`;

					return (
						<Text
							key={key}
							tag='li'
							text={text}
							styles={{
								marginTop: `var(--space-md)`,
								transform: transform,
								opacity: opacity,
								transition: `all 1s ${delay}`,
							}}
						/>
					);
				})}
			</ul>
		</div>
	);
}
