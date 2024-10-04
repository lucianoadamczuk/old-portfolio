'use client';
import { languages } from '@/app/i18n/configuration/settings';
import styles from './LanguageSwitcher.module.css';
import { Text } from '@/components';
import { cleanString } from '@/utilities';
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function LanguageSwitcher() {
	const pathname = usePathname();
	const router = useRouter();
	const newPathname = pathname.split('/').slice(2).join('/');

	return (
		<div className={styles.switcher}>
			{languages.map((l, index) => {
				const key = cleanString(l + index);
				const lang = l;
				const isLast = languages.length - 1 === index;
				const isCurrent = pathname.split('/')[1] === lang;
				return (
					<React.Fragment key={key}>
						<Text
							size='small'
							tag='span'
							color={isCurrent ? 'primary' : 'gray'}
							text={lang}
							onClick={() => router.push(`/${lang}/${newPathname}/`)}
						/>
						{!isLast && <Text size='base' tag='span' text='/' />}
					</React.Fragment>
				);
			})}
		</div>
	);
}
