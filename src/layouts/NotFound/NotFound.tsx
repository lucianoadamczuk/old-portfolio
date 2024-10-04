import { Text } from '@/components';
import styles from './NotFound.module.css';
import { IParams } from '@/types';
import { useTranslation } from '@/app/i18n';

interface Props {
	lang: IParams['lang'];
}
export default async function NotFound({ lang }: Props) {
	const { t } = await useTranslation(lang, 'global', { keyPrefix: 'notFound' });
	const title = t('title', { ns: 'global' });
	const text = t('text', { ns: 'global' });

	console.log(lang);

	return (
		<div className={styles.container}>
			<Text tag='h3' weight={700} color='primary' size='title' text={title} />
			<Text tag='h3' text={text} />
		</div>
	);
}
