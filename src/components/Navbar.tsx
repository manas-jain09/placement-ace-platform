
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId: string) => {
    if (window.location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      if (isOpen) {
        setIsOpen(false);
      }
    }
  };

  return (
    <nav className="bg-white shadow-sm py-2 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img 
            src="/MainLogo.png" 
            alt="Ikshvaku Innovations Logo" 
            className="h-14 w-auto"
          />
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 hover:text-primary transition-colors">
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-primary font-medium transition-colors">Home</button>
          <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-primary font-medium transition-colors">Products</button>
          <button onClick={() => scrollToSection('why')} className="text-gray-700 hover:text-primary font-medium transition-colors">Why Us</button>
{/*           <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-primary font-medium transition-colors">Pricing</button> */}
          <button onClick={() => scrollToSection('colleges')} className="text-gray-700 hover:text-primary font-medium transition-colors">For Colleges</button>
          <Link to="/about" className="text-gray-700 hover:text-primary font-medium transition-colors">About Us</Link>
          <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-primary font-medium transition-colors">Contact</button>
          <Link to="/login">
            <Button className="ml-4">Login</Button>
          </Link>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg absolute w-full">
          <div className="flex flex-col space-y-4">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-primary font-medium transition-colors py-2 px-4 rounded-md hover:bg-gray-50 text-left">Home</button>
            <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-primary font-medium transition-colors py-2 px-4 rounded-md hover:bg-gray-50 text-left">Products</button>
            <button onClick={() => scrollToSection('why')} className="text-gray-700 hover:text-primary font-medium transition-colors py-2 px-4 rounded-md hover:bg-gray-50 text-left">Why Us</button>
{/*             <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-primary font-medium transition-colors py-2 px-4 rounded-md hover:bg-gray-50 text-left">Pricing</button> */}
            <button onClick={() => scrollToSection('colleges')} className="text-gray-700 hover:text-primary font-medium transition-colors py-2 px-4 rounded-md hover:bg-gray-50 text-left">For Colleges</button>
            <Link to="/about" className="text-gray-700 hover:text-primary font-medium transition-colors py-2 px-4 rounded-md hover:bg-gray-50 text-left">About Us</Link>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-primary font-medium transition-colors py-2 px-4 rounded-md hover:bg-gray-50 text-left">Contact</button>
            <Link to="/login" className="py-2 px-4 rounded-md hover:bg-gray-50 text-left">
              <Button className="w-full">Login</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
