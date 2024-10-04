import { NotFound } from '@/layouts';
import { fallbackLng } from '../i18n/configuration/settings';

export default function notFound() {
	return <NotFound lang={fallbackLng} />;
}
