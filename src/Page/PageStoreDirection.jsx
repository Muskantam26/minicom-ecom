import React from 'react'
import HeaderPage from '../component/headerPage'
import MapSection from '../component/MapSection'


const PageStoreDirection = () => {
    const storeInfo = {
        address: "123 Suspendis matti, Visaosang Building VST District, NY Accums, North American",
        email: "support@domain.com",
        phone: "(012)-345-67890",
        openingTime: "Our store has re-opened for shopping, exchanges every day 11am to 7pm",
        socials: {
            facebook: "#",
            instagram: "#",
            twitter: "#",
            tiktok: "#"
        }
    };
    
    const defaultMapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d2887.2685933611843!2d-79.41724498450186!3d43.63319087912164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b35061b4020a5%3A0xeab50d2e82f190ca!2sEnercare%20Centre!5e0!3m2!1sen!2sca!4v1680196863644!5m2!1sen!2sca";

  return (
    <div>
        <HeaderPage/>
        <MapSection mapSrc="https://www.google.com/maps?q=Bhopal&output=embed" storeInfo={storeInfo} />
    </div>
  )
}

export default PageStoreDirection