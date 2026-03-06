import React, { useState } from "react";
import { Link } from "react-router-dom";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import Button from "../ui/Button";

/**
 * Footer Component
 * Main site footer with newsletter, links, and social media
 * 
 * @param {Object} props
 * @param {string} props.logoSrc - Logo image source
 * @param {string} props.aboutText - About section text
 * @param {Array} props.socialLinks - Array of social media links
 * @param {Object} props.newsletterConfig - Newsletter configuration
 * @param {Object} props.linkColumns - Footer link columns
 */
const Footer = ({
  logoSrc,
  aboutText = "Discover premium furniture designed to transform your living spaces. Quality craftsmanship meets modern design.",
  socialLinks = [],
  newsletterConfig = {
    title: "Newsletter",
    subtitle: "Sign up for exclusive offers",
    placeholder: "Enter your email",
    buttonText: "Subscribe",
  },
  linkColumns = {},
}) => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter submission
    setEmail("");
  };

  const defaultLinkColumns = {
    customerCare: {
      title: "Customer Care",
      items: [
        { label: "My Account", url: "/account" },
        { label: "Track Order", url: "/track-order" },
        { label: "Wishlist", url: "/wishlist" },
        { label: "Shopping Cart", url: "/cart" },
      ],
    },
    helpSupport: {
      title: "Help & Support",
      items: [
        { label: "FAQs", url: "/Frequently-Asked-Questions" },
        { label: "Contact Us", url: "/contact" },
        { label: "Store Locations", url: "/page-store-location" },
        { label: "Returns", url: "/returns" },
      ],
    },
    companyInfo: {
      title: "Company Info",
      items: [
        { label: "About Us", url: "/about-Us" },
        { label: "Careers", url: "/careers" },
        { label: "Press", url: "/press" },
        { label: "Blog", url: "/blog" },
      ],
    },
    ...linkColumns,
  };

  return (
    <footer className="bg-[var(--color-footer-bg)] text-white py-16 px-4 md:px-8">
      <div className="max-w-[var(--container-max-width)] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Logo and About Section */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Logo */}
            <Link to="/">
              {logoSrc ? (
                <img src={logoSrc} alt="Logo" className="h-10 w-auto" />
              ) : (
                <span className="text-2xl font-bold tracking-wide">MINICOM</span>
              )}
            </Link>

            {/* About Text */}
            <Paragraph variant="muted" className="max-w-sm text-gray-400">
              {aboutText}
            </Paragraph>

            {/* Social Links */}
            {socialLinks.length > 0 && (
              <div className="flex gap-3 mt-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-[var(--color-hover)] transition-colors duration-[var(--transition-fast)]"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Right Side */}
          <div className="lg:col-span-8">
            {/* Newsletter Row */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
              <div className="md:col-span-4">
                <h3 className="text-sm font-bold tracking-wider mb-2 uppercase">
                  {newsletterConfig.title}
                </h3>
                <p className="text-gray-400 text-xs uppercase tracking-wide">
                  {newsletterConfig.subtitle}
                </p>
              </div>
              <div className="md:col-span-8">
                <form
                  onSubmit={handleNewsletterSubmit}
                  className="flex w-full"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={newsletterConfig.placeholder}
                    className="flex-1 bg-transparent border border-gray-700 text-white px-4 py-3 text-sm outline-none focus:border-gray-500 transition-colors duration-[var(--transition-fast)] placeholder-gray-500"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-white text-black px-8 py-3 text-sm font-bold tracking-wider hover:bg-[var(--color-hover)] transition-colors duration-[var(--transition-fast)] whitespace-nowrap uppercase"
                  >
                    {newsletterConfig.buttonText}
                  </button>
                </form>
              </div>
            </div>

            {/* Link Columns */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {Object.values(defaultLinkColumns).map((column, index) => (
                <div key={index}>
                  <h3 className="text-sm font-bold tracking-wider mb-6 uppercase">
                    {column.title}
                  </h3>
                  <ul className="flex flex-col gap-4">
                    {column.items.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          to={link.url}
                          className="text-gray-400 hover:text-[var(--color-hover)] text-xs uppercase tracking-wide transition-colors duration-[var(--transition-fast)]"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Minicom. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="/privacy"
              className="text-gray-500 hover:text-white text-xs transition-colors duration-[var(--transition-fast)]"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-gray-500 hover:text-white text-xs transition-colors duration-[var(--transition-fast)]"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
