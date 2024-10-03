import styles from './ScrollBox.module.css';
import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}
export default function ScrollBox({ children }: Props) {
	return <div className={styles.scrollBox}> {children} </div>;
}
