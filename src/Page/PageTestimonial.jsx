import React from 'react';
import HeaderPage from '../component/headerPage';
import Testimonials from '../component/Testimonials';

const PageTestimonial = () => {
  return (
    <div>
      <HeaderPage title="PAGE TESTIMONIAL" />
      <div className=" w-full mx-auto  px-4  mt-5">
      <Testimonials/>
      </div>
    </div>
  );
};

export default PageTestimonial;
