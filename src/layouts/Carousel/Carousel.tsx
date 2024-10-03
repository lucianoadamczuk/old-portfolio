'use client';
import { v4 as uuidv4 } from 'uuid';
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

interface Props {
	about: { title: string; items: string[] }[];
}
export default function Carousel({ about }: Props) {
	return (
		<>
			<Swiper
				pagination={{
					type: 'fraction',
				}}
				spaceBetween={50}
				navigation={true}
				modules={[Pagination, Navigation]}
				className='Carousel'
			>
				{about.map((i) => {
					const key = uuidv4();
					const title = i.title;
					const items = i.items;
					return (
						<SwiperSlide key={key}>
							<SlideAbout title={title} items={items} />
						</SwiperSlide>
					);
				})}
			</Swiper>
		</>
	);
}
