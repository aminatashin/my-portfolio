// import React from "react";
// import "./testimonial.css";

// import { Pagination } from "swiper";

// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";

// import "swiper/css/pagination";

// const Testimonial = () => {
//   return (
//     <section id="#testimonial">
//       <h5>Rview from clients</h5>
//       <h2>Testmonials</h2>
//       <Swiper
//         className="container testimonials__container"
//         // install Swiper modules
//         modules={[Pagination]}
//         spaceBetween={40}
//         slidesPerView={1}
//         pagination={{ clickable: true }}
//       >
//         {data.map(({ name, avatar, review }, index) => {
//           return (
//             <>
//               <SwiperSlide key={index} className="testimonial">
//                 <div className="client__avatar">
//                   <img src={avatar} alt="clientavatar" />
//                 </div>
//                 <h5 className="client__name">{name}</h5>
//                 <small className="client__review">{review}</small>
//               </SwiperSlide>
//             </>
//           );
//         })}
//       </Swiper>
//     </section>
//   );
// };

// export default Testimonial;
