// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"

// import required modules
import { Pagination } from "swiper";


import Testimonial from "./Testimonial";
import './testimonials.css'
import { useEffect, useState } from "react";


const Testimonials = () => {
  const [data ,setData] = useState([])
  console.log("data: ", data);
  useEffect(()=>{
    fetch('https://script.google.com/macros/s/AKfycbwZiFktFYcejaL6MGYdfobbi5ngqDCP4suMsQiiXbPKVdolgRh6Cb6xpEhRwWtizDhX/exec')
  .then(response => response.json())
  .then(data => {
    // Process the fetched data
    setData(data.data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <section id="testimonials">
      <h2>What My Clients Say</h2>
      <p>
        These are unbiased testmonials from some of my clients
      </p>
      <div className="container">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          601: {slidesPerView: 2},
          1025: {slidesPerView: 3}
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        autoplay={true}
        className="mySwiper"
      >
        {data.length > 0 &&
          data.map(testimonial => (
            <SwiperSlide key={testimonial.id}>
              <Testimonial testimonial={testimonial}/>
            </SwiperSlide>
          ))
        }
      </Swiper>
      </div>
    </section>
  )
}

export default Testimonials