import Link from 'next/link';
import styles from './SocialMedias.module.css';
import { Icon } from '@/components';
import { personalInformation } from '@/constants';

export default function SocialMedias() {
	return (
		<div className={styles.socialMedias}>
			<Link href={personalInformation.linkedIn} target='_blank'>
				<Icon as='linkedIn' size='small' />
			</Link>
			<Link href={personalInformation.github} target='_blank'>
				<Icon as='github' size='small' />
			</Link>
		</div>
	);
}
