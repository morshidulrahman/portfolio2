import React from 'react'
import AppWrap from '../wrapper/AppWrap'
import MotionWrap from '../wrapper/Motionwrap';
import "./Testimonial.scss"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const testimonials = [
    {
        image: "/assets/khalid.jpeg",
        name: "khalid Saifullah ",
        subtitle: "Founder of WorksLee & KS Devware ",
        description: "l enjoy working with them and learn so much.you guys make the process fun and intersing and good luck !👍"
    },
    {
        image: "/assets/man1.jpg",
        name: "john doe",
        subtitle: "product manger",
        description: "l enjoy working with them and learn so much.you guys make the process fun and intersing and good luck !👍"
    },
    {
        image: "/assets/man2.jpg",
        name: "Michel hency",
        subtitle: "product manger",
        description: "l enjoy working with them and learn so much.you guys make the process fun and intersing and good luck !👍"
    }
]
const Testimonial = () => {
    return (
        <>
            <h2 className="head-text header_down">Clients & Review</h2>
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                loop={true}
                grabCursor={true}
                modules={[Pagination]}
                className="mySwiper">
                {
                    testimonials.map((item, index) => (
                        <SwiperSlide key={index} className="swiperitem">
                            <div >
                                <img src={item.image} alt="d" />
                            </div>
                            <h3 >{item.name}</h3>
                            <p >{item.subtitle}</p>
                            <div>
                                {item.description}
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    )
}

export default AppWrap(MotionWrap(Testimonial, "app__Testimonial"), "testimonial", "app__primarybg")