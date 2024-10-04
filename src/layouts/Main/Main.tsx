import { Text } from '@/components';
import Image from 'next/image';
import { ReactNode } from 'react';
import styles from './Main.module.css';
import { AnimationMain } from '@/animations';

interface Props {
	path: string;
	src: string;
	alt: string;
	subtitle: string;
	title: string;
	reflectedText?: string;
	inverted?: boolean;
	children: ReactNode;
}
export default function Main({
	path,
	src,
	alt,
	subtitle,
	title,
	reflectedText,
	inverted,
	children,
}: Props) {
	return (
		<>
			<div className={styles.mainContainer}>
				<main className={styles.main}>
					<div className={styles.textBox} style={{ order: inverted ? 2 : -1 }}>
						<Text tag='h2' color='gray' text={subtitle} />
						<Text
							tag='h1'
							color='primary'
							size='title'
							weight={700}
							text={title}
						/>

						{/* ---------------------------- reflected phrase ---------------------------- */}
						{reflectedText && (
							<div className={styles.reflectedContainer}>
								<Text tag='h2' color='gray' spaced text={reflectedText} />
								<Text
									tag='h2'
									color='gray'
									spaced
									className={styles.reflectedText}
									text={reflectedText}
								/>
							</div>
						)}
					</div>
					{children}
				</main>

				<div className={styles.imageContainer}>
					<Image src={src} alt={alt} fill className={styles.image} />
				</div>
			</div>
			<AnimationMain path={path} />
		</>
	);
}
