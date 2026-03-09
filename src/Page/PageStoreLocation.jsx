import React from 'react';
import HeaderPage from '../component/headerPage';
import StoreLocationDetail from '../component/StoreLocationDetail';

const locationsData = [
  {
    title: "Store in New York",
    address: "123 Suspendis matti, Visaosang Building VST District, NY Accums, North American",
    email: "support@domain.com",
    phone: "(012)-345-67890",
    openingTime: "Our store has re-opened for shopping, exchanges every day 11am to 7pm",
    image: "https://nov-minicom.myshopify.com/cdn/shop/files/store-location-1.jpg?v=1749029612&width=1080", 
    reverse: false
  },
  {
    title: "Store in California",
    address: "123 Suspendis matti, Visaosang Building VST District, NY Accums, North American",
    email: "support@domain.com",
    phone: "(012)-345-67890",
    openingTime: "Our store has re-opened for shopping, exchanges every day 11am to 7pm",
    image: "https://nov-minicom.myshopify.com/cdn/shop/files/store-location-2.jpg?v=1749029612&width=1080",
    reverse: true
  },
  {
    title: "Store in Chicago",
    address: "123 Suspendis matti, Visaosang Building VST District, NY Accums, North American",
    email: "support@domain.com",
    phone: "(012)-345-67890",
    openingTime: "Our store has re-opened for shopping, exchanges every day 11am to 7pm",
    image: "https://nov-minicom.myshopify.com/cdn/shop/files/store-location-3.jpg?v=1749029612&width=1080",
    reverse: false
  }
];

const PageStoreLocation = () => {
  return (
    <div>
      <HeaderPage/>
      <div className=" w-full mx-auto  lg:px-8 flex flex-col gap-0 lg:gap-0 bg-white">
        {locationsData.map((location, index) => (
          <StoreLocationDetail key={index} {...location} />
        ))}
      </div>
    </div>
  )
}

export default PageStoreLocation;