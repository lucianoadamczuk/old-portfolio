import styles from './TextSpinner.module.css';
import { v4 as uuidv4 } from 'uuid';
import Text from '../Text/Text';

interface Props {
	phrase: string;
}
export default function TextSpinner({ phrase }: Props) {
	const letters = phrase.split('');
	return (
		<div className={styles.textSpinner}>
			{letters.map((letter, index) => {
				const key = uuidv4();
				return (
					<Text
						key={key}
						tag='span'
						color='gray'
						styles={{
							transform: `rotate(${phrase.length * index}deg)`,
							position: 'absolute',
							transformOrigin: `0 ${phrase.length * 4.5}px`,
							translate: `4px -${phrase.length * 3.8}px`,
						}}
						text={letter}
					/>
				);
			})}
		</div>
	);
}
