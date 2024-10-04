import { NotFound } from '@/layouts';
import { IParams } from '@/types';

interface Props {
	params: IParams;
}
export default function CatchAllPage({ params }: Props) {
	return <NotFound lang={params.lang} />;
}
