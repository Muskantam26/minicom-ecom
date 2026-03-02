import React from "react";

const testimonialData = [
  {
    id: 1,
    text: "This Theme was easy to install and configure. When I got stuck, I reached out to support and Alex provided super easy screenshots showing where to go to configure areas I wanted to modify. Fast and friendly support and a beautiful theme to work with. It was money well spent (and way cheaper than comparable themes bought through shopify).",
    author: "Customer",
    source: "From Envato",
    image: "https://nov-minicom.myshopify.com/cdn/shop/files/tes-1.jpg?crop=center&height=70&v=1749027978&width=70",
  },
  {
    id: 2,
    text: "Thanks and again sorry what i early said. I want to add one more thing please if possible than make video about this theme feature like how to add product search and much more it really help people to know.",
    author: "Customer",
    source: "From Envato",
    image: "https://nov-minicom.myshopify.com/cdn/shop/files/tes-5.jpg?crop=center&height=70&v=1749027978&width=70",
  },
  {
    id: 3,
    text: "Amazing Design. Very thoughtful and easy to navigate. I am also particularly satisfied with the support system. It is very efficient. Enabling Customers upload screenshots for some issues would be a great Plus too!",
    author: "Customer",
    source: "Customer",
    image: "https://nov-minicom.myshopify.com/cdn/shop/files/tes-10.jpg?crop=center&height=70&v=1749027978&width=70",
  },
  {
    id: 4,
    text: "Not only a great Shopify theme, Alex fixed our issue wihtin 24h. Thank you very much for help.",
    author: "Customer",
    source: "From Envato",
    image: "https://nov-minicom.myshopify.com/cdn/shop/files/tes-14.jpg?crop=center&height=70&v=1749027979&width=70",
  },
  {
    id: 5,
    text: "I'm very satisfied with this theme, especially its design freedom for users choices: so many possibilities at any step you can imagine for your business. But beyond such qualities (that anyone can see just looking theme page/demo), I must to mention my satisfaction with the support team: very professional. They clarified many doubts, solved little problems in my configuration and made easier and safer all the process. Thank you!",
    author: "Customer",
    source: "Customer",
    image: "https://nov-minicom.myshopify.com/cdn/shop/files/tes-7.jpg?crop=center&height=70&v=1749027978&width=70",
  },
  {
    id: 6,
    text: "Great support Alex! Shopify is a solid platform but once a theme is applied, the templates, assets, and liquid files can be",
    author: "Customer",
    source: "From Envato",
    image: "https://nov-minicom.myshopify.com/cdn/shop/files/tes-15.jpg?crop=center&height=70&v=1749027979&width=70",
  },
  {
    id: 7,
    text: "Now i am really happy with My purchase.\n\nFirst of all sorry what i early say about theme. This theme is really good with excellent support. the team members are very helping and very fast to solve whatever issue i face.",
    author: "Customer",
    source: "Customer",
    image: "https://nov-minicom.myshopify.com/cdn/shop/files/tes-6.jpg?crop=center&height=70&v=1749027978&width=70",
  },
  {
    id: 8,
    text: "Truly elegant theme built with customer in mind, excellent design that facilitates navigation across the many categories of skin and hair care.\n\nFancy looking with elegant animations and subtle touches here and there.",
    author: "Customer",
    source: "From Envato",
    image: "https://nov-minicom.myshopify.com/cdn/shop/files/tes-13.jpg?crop=center&height=70&v=1749027978&width=70",
  },
  {
    id: 9,
    text: "Our experience with the theme developer was great! Alex was very helpful in guiding us with the theme and accommodating to our requests. Very responsive (within a couple of business days) and straightforward with responses. Thanks again for the great theme and excellent customer service.",
    author: "Customer",
    source: "From Envato",
    image: "https://nov-minicom.myshopify.com/cdn/shop/files/tes-9.jpg?crop=center&height=70&v=1749027978&width=70",
  },
  {
    id: 10,
    text: "Nova-Creative not only has exquisite designs, their customer support is outstanding too! They helped me tweak my template to get it exactly the way I imagined it in my head. You will not regret doing business with them. The entire experience is just incredible! Thanks again!!",
    author: "Customer",
    source: "From Envato",
    image: "https://nov-minicom.myshopify.com/cdn/shop/files/tes-4.jpg?crop=center&height=70&v=1749027978&width=70",
  },
   {
    id: 11,
    text: "Truly elegant theme built with customer in mind, excellent design that facilitates navigation across the many categories of skin and hair care.\n\nFancy looking with elegant animations and subtle touches here and there.",
    author: "Customer",
    source: "From Envato",
    image: "https://nov-minicom.myshopify.com/cdn/shop/files/tes-13.jpg?crop=center&height=70&v=1749027978&width=70",
  },
  {
    id: 12,
    text: "Our experience with the theme developer was great! Alex was very helpful in guiding us with the theme and accommodating to our requests. Very responsive (within a couple of business days) and straightforward with responses. Thanks again for the great theme and excellent customer service.",
    author: "Customer",
    source: "From Envato",
    image: "https://nov-minicom.myshopify.com/cdn/shop/files/tes-9.jpg?crop=center&height=70&v=1749027978&width=70",
  },
];

const TestimonialCard = ({ review }) => {
  return (
    <div className="bg-white p-8 rounded-md shadow-[0_2px_15px_rgba(0,0,0,0.06)] border border-gray-200 flex flex-col mb-6 break-inside-avoid shadow-xl hover:-translate-y-1 transition-transform duration-300">
      <p className="text-gray-500 text-[14px] leading-relaxed mb-6 whitespace-pre-line text-left">
        {review.text}
      </p>
      <div className="flex items-center gap-4 mt-auto">
        <img
          src={review.image}
          alt={review.author}
          className="w-14 h-14 rounded-full object-cover"
        />
        <div className="flex flex-col text-left">
          <span className="font-bold text-[14px] text-[#222222]">
            {review.author}
          </span>
          <span className="text-gray-500 text-[13px]">
            {review.source}
          </span>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="w-full ">
      <div className=" p-10 ">
        
        {/* Top Graphic Section */}
        <div className="w-full bg-[#f4f4f4] rounded-lg p-15 flex flex-col md:flex-row   gap-8 mb-12">
          <div className="w-full md:w-1/4 flex justify-start md:justify-end">
            <img 
              src="https://nov-minicom.myshopify.com/cdn/shop/files/page_tes_avatar.png?v=1751251363&width=380" 
              alt="Happy Customers" 
              className="max-w-[200px] md:max-w-full h-auto object-contain"
            />
          </div>
          <div className="w-full md:w-2/3 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl text-gray-300 rotate-180 inline-block font-serif">,,</span>
              <span className="text-[11px] font-bold text-gray-600 tracking-[0.15em] uppercase">
                What's happy customers say
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#222222]">
              See Why Thousands of Customer Love Us!
            </h2>
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6  ">
          {testimonialData.map((review) => (
            <TestimonialCard key={review.id} review={review}   />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Testimonials;
