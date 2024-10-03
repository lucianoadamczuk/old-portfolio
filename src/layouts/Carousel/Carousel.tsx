'use client';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { SlideAbout } from '@/components';

import './Carousel.css';
import { useState } from 'react';
import { cleanString } from '@/utilities';

interface Props {
	about: { title: string; items: string[] }[];
}
export default function Carousel({ about }: Props) {
	const [visibleIndex, setVisibleIndex] = useState<number>(0);

	return (
		<>
			<Swiper
				pagination={{
					type: 'fraction',
				}}
				spaceBetween={50}
				navigation={true}
				modules={[Pagination, Navigation]}
				onSlideChange={(swiper) => {
					const activeIndex = swiper.activeIndex;
					setVisibleIndex(activeIndex);
				}}
				className='Carousel'
			>
				{about.map((i, index) => {
					const key = cleanString(i.title + i.items + index);
					const title = i.title;
					const items = i.items;
					return (
						<SwiperSlide key={key}>
							<SlideAbout
								title={title}
								items={items}
								isVisible={index === visibleIndex}
							/>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</>
	);
}
