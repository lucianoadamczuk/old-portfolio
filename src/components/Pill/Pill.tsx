'use client';
import { useState } from 'react';
import Text from '../Text/Text';
import styles from './Pill.module.css';
import Icon from '../Icon/Icon';

interface Props {
	slug: string;
	description: string;
}
export default function Pill({ slug, description }: Props) {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<>
			{/*  ---------------------------------- pill ----------------------------------  */}
			<div
				className={`${styles.pill} ${isOpen ? styles.active : ''}`}
				onClick={() => setIsOpen(true)}
			>
				{/* pill text */}
				<Text tag='span' size='small' text={slug} />
			</div>

			{/* ------------------------------ expanded pill ----------------------------- */}
			<div
				className={styles.details}
				style={{
					transform: isOpen ? 'scale(1)' : 'scale(0)',
					borderRadius: isOpen ? '0%' : '50%',
					opacity: isOpen ? 1 : 0,
				}}
			>
				{/* title */}
				<Text tag='h6' weight={700} size='title' color='gray' text={slug} />
				{/* description */}
				<Text tag='span' size='small' text={description} />

				<Icon
					as='xCircle'
					className={styles.icon}
					onClick={() => setIsOpen(false)}
				/>
			</div>
		</>
	);
}
