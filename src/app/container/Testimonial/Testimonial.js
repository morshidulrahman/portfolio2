import React from 'react'
import AppWrap from '../wrapper/AppWrap'
import MotionWrap from '../wrapper/Motionwrap';
import "./Testimonial.scss"
import clientimage from "../../assets/css.png"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const testimonials = [
    {
        image: clientimage,
        name: "john doe",
        subtitle: "product manger",
        description: "lorem Ipsum heloo description description  description description description description description description description description description description description description description description description description"
    },
    {
        image: clientimage,
        name: "john doe",
        subtitle: "product manger",
        description: "lorem Ipsum heloo description description  description description description description descri "
    },
    {
        image: clientimage,
        name: "john doe",
        subtitle: "product manger",
        description: "lorem Ipsum heloo description description  description description description description description description description description description description description description description description description description"
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