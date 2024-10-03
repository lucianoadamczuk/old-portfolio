import { CSSProperties } from 'react';

interface Props {
	tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'li' | 'span';
	text: string;
	color?: 'light' | 'gray' | 'primary';
	size?: 'small' | 'base' | 'subtitle' | 'title';
	spaced?: boolean;
	weight?: 300 | 700;
	className?: string;
	styles?: CSSProperties;
}

export default function Text({
	tag: Tag,
	text,
	color = 'light',
	size = 'base',
	spaced,
	weight = 300,
	className,
	styles,
}: Props) {
	/* --------------------------------- styles --------------------------------- */
	const style = {
		color: `var(--color-${color})`,
		fontSize: `var(--font-size-${size})`,
		letterSpacing: spaced ? 'var(--letter-spacing)' : '',
		fontWeight: weight,
		...styles,
	} as CSSProperties;

	return (
		<Tag className={className} style={style}>
			{text}
		</Tag>
	);
}
