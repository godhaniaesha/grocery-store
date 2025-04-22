import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import userImage from '../image/563244-natural-history-museum-london-1920x1080-wallpaper.jpg';

export default function Testimonial() {
    const testimonials = [
        {
          id: 1,
          name: "Josephine",
          image: userImage,
          text: "Lorem ipsum is simply dummy text the printing and typesetting industry dummy text ever since."
        },
        {
          id: 2,
          name: "John Smith",
          image: userImage,
          text: "Lorem ipsum is simply dummy text the printing and typesetting industry dummy text ever since."
        },
        {
          id: 3,
          name: "Emma Wilson",
          image: userImage,
          text: "Lorem ipsum is simply dummy text the printing and typesetting industry dummy text ever since."
        },
        {
          id: 4,
          name: "Michael Brown",
          image: userImage,
          text: "Lorem ipsum is simply dummy text the printing and typesetting industry dummy text ever since."
        },
        {
          id: 5,
          name: "Sarah Davis",
          image: userImage,
          text: "Lorem ipsum is simply dummy text the printing and typesetting industry dummy text ever since."
        }
      ];

  return (
    <div className="x_testimonial_section">
      <div className="a_header_container py-5">
      <div className="x_testimonial_header text-center mb-5">
          <h5 className="x_testimonial_subtitle">Testimonial</h5>
          <h2 className="x_testimonial_title">Our Clients Say!!!</h2>
        </div>
        
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            }
          }}
          className="x_testimonial_slider"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="x_testimonial_card">
                <div className="x_testimonial_image">
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className="x_testimonial_content">
                  <div className="x_quote_left">"</div>
                  <h4 className="x_testimonial_name">{testimonial.name}</h4>
                  <p className="x_testimonial_text">{testimonial.text}</p>
                  <div className="x_quote_right">"</div>
                
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}