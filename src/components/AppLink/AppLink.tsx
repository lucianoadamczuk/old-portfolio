'use client';
import Link from 'next/link';
import Text from '../Text/Text';
import { usePathname } from 'next/navigation';

interface Props {
	path: string;
	text: string;
}
export default function AppLink({ path, text }: Props) {
	const currentPath = usePathname();

	const isActive = path === currentPath;
	return (
		<Link href={path}>
			<Text tag='span' color={isActive ? 'primary' : 'light'} text={text} />
		</Link>
	);
}
