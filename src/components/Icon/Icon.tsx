import styles from './Icon.module.css';
import {
	LuPhone,
	LuMapPin,
	LuMailbox,
	LuLinkedin,
	LuGithub,
	LuXCircle,
	LuGlobe,
} from 'react-icons/lu';
import { IIcons } from '@/types';

interface Props {
	as: IIcons;
	size?: 'small' | 'base';
	className?: string;
	onClick?: () => void;
}
export default function Icon({ as, size = 'base', className, onClick }: Props) {
	return (
		<div
			className={`${styles.icon} ${styles[size]} ${className ? className : ''}`}
			onClick={onClick}
		>
			{as === 'phone' && <LuPhone />}
			{as === 'email' && <LuMailbox />}
			{as === 'github' && <LuGithub />}
			{as === 'linkedIn' && <LuLinkedin />}
			{as === 'location' && <LuMapPin />}
			{as === 'xCircle' && <LuXCircle />}
			{as === 'globe' && <LuGlobe />}
		</div>
	);
}
