import React from 'react';
import { Home, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mt-12 pt-8 border-t border-gray-800 w-full flex justify-center">
        <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-screen-lg">
          <p className="text-sm text-center">© 2025 Ikshvaku Innovations. All rights reserved.</p>
          <div className="mt-4 md:mt-0"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
