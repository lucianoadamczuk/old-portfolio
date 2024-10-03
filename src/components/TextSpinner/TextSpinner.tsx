import styles from './TextSpinner.module.css';
import Text from '../Text/Text';
import { cleanString } from '@/utilities';

interface Props {
	phrase: string;
}

export default function TextSpinner({ phrase }: Props) {
	const letters = phrase.split('');
	const baseDistance = letters.length; // Distancia base para la separación de letras
	const scaleFactor = phrase.length > 10 ? 10 / phrase.length : 1; // Factor para ajustar el espacio con frases largas

	return (
		<div
			className={styles.textSpinner}
			style={{ width: `${baseDistance * 8}px` }}
		>
			{letters.map((letter, index) => {
				const key = cleanString(letter + index);
				const angle = (360 / letters.length) * index; // Distribuye las letras en un círculo completo
				const distance = baseDistance * 10 * scaleFactor; // Ajusta la distancia

				return (
					<Text
						key={key}
						tag='span'
						color='gray'
						styles={{
							transform: `rotate(${angle}deg) translate(0, -${distance}px)`, // Rota y ajusta la posición
							position: 'absolute',
							transformOrigin: `center center`, // Establece el centro como origen de transformación
						}}
						text={letter}
					/>
				);
			})}
		</div>
	);
}
