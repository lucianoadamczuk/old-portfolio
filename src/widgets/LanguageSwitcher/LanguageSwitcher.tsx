import styles from './LanguageSwitcher.module.css';
import { Text } from '@/components';
import { cleanString } from '@/utilities';
import React from 'react';

export default function LanguageSwitcher() {
	const languages = ['en', 'es'];
	return (
		<div className={styles.switcher}>
			{languages.map((l, index) => {
				const key = cleanString(l + index);
				const text = l;
				const isLast = languages.length - 1 === index;

				return (
					<React.Fragment key={key}>
						<Text size='small' tag='span' text={text} />
						{!isLast && <Text size='base' tag='span' text='/' />}
					</React.Fragment>
				);
			})}
		</div>
	);
}
