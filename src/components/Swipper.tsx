import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import { Data } from '../interfaces/data';
import baseUrl from './baseUrl';



const Swipper: React.FC<{ movies: Data[] }> = (item) => {
    return (
        <div>
            <Swiper
                slidesPerView={3.5}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper md:w-[60%_!important]"
            >
                {
                    item.movies.slice(0, 6).map((m, i) => {
                        return <SwiperSlide className='rounded-2xl' key={i}>
                            <div>
                                <img className='md:w-[100px] md:h-[400px_!important] rounded-2xl' src={baseUrl(m.poster_path, 'small')} alt="" />
                                <h1 className='text-[8px] sm:text-lg'>{m.title ? m.title.slice(0, 14) : m.name?.slice(0, 14)}</h1>
                            </div>
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </div>
    );
}

export default Swipper