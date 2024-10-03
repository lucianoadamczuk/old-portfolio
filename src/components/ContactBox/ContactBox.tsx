import { IIcons } from '@/types';
import Icon from '../Icon/Icon';
import Text from '../Text/Text';
import styles from './ContactBox.module.css';

interface Props {
	icon: IIcons;
	text: string;
}

export default function ContactBox({ icon, text }: Props) {
	return (
		<div className={styles.contactBox}>
			<Icon as={icon} />
			<Text tag='h6' size='small' text={text} />
		</div>
	);
}
