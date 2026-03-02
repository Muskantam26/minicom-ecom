import React from 'react'
import HeaderPage from '../component/headerPage'
import MapSection from '../component/MapSection'
import ContactFormSection from '../component/ContactFormSection'

const ContactUS = () => {
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11545.918915494191!2d-79.390632!3d43.648356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34cdbb0e0dfb%3A0x7d06e2a7dc67664!2sFirst%20Canadian%20Place!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus";

  return (
    <div>
        <HeaderPage title="Contact Us" />
        <MapSection mapSrc={mapSrc} />
        <ContactFormSection />
    </div>
  )
}

export default ContactUS