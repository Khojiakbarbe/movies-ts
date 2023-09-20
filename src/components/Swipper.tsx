import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
import { Data } from '../interfaces/data';
import baseUrl from './baseUrl';



const Swipper:React.FC<{movies:Data[]}> = (item) => {
    return (
        <>
            <Swiper
                slidesPerView={3.5} 
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper w-[60%_!important]"
            >
                {
                    item.movies.map(m =>  {
                        return <SwiperSlide className=' rounded-2xl'>
                            <img className=' w-[100px] rounded-2xl' src={baseUrl(m.poster_path,'small')} alt="" />
                        </SwiperSlide>
                    })
                }
                {/* <SwiperSlide>Slide 1</SwiperSlide> */}
            </Swiper>
        </>
    );
}

export default Swipper