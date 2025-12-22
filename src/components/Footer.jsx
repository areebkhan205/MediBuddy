import React from 'react';
import { FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 lg:px-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              We are committed to providing quality healthcare services.
            </p>
          </div>

          {/* Quick Links Section */}
         

          {/* Contact Section */}
          <div className="pl-20">
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="text-sm">
              123 Healthcare St, Medical City, HC 12345
            </p>
            <p className="text-sm">Phone: +123-456-7890</p>
            <p className="text-sm">Email: support@healthcare.com</p>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col pl-20 items-start">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-500 transition"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 transition"
              >
                <FaFacebook size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-12 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Healthcare. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;