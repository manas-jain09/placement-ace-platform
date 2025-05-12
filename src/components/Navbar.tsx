
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-sm py-2 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img 
            src="/MainLogo.png" 
            alt="Ikshvaku Innovations Logo" 
            className="h-10 w-auto"
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
          <a href="#home" className="text-gray-700 hover:text-primary font-medium transition-colors">Home</a>
          <a href="#products" className="text-gray-700 hover:text-primary font-medium transition-colors">Products</a>
          <a href="#why" className="text-gray-700 hover:text-primary font-medium transition-colors">Why Us</a>
          <a href="#colleges" className="text-gray-700 hover:text-primary font-medium transition-colors">For Colleges</a>
          <a href="#contact" className="text-gray-700 hover:text-primary font-medium transition-colors">Contact</a>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            Login
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg absolute w-full">
          <div className="flex flex-col space-y-4">
            <a href="#home" className="text-gray-700 hover:text-primary font-medium transition-colors py-2 px-4 rounded-md hover:bg-gray-50" onClick={toggleMenu}>Home</a>
            <a href="#products" className="text-gray-700 hover:text-primary font-medium transition-colors py-2 px-4 rounded-md hover:bg-gray-50" onClick={toggleMenu}>Products</a>
            <a href="#why" className="text-gray-700 hover:text-primary font-medium transition-colors py-2 px-4 rounded-md hover:bg-gray-50" onClick={toggleMenu}>Why Us</a>
            <a href="#colleges" className="text-gray-700 hover:text-primary font-medium transition-colors py-2 px-4 rounded-md hover:bg-gray-50" onClick={toggleMenu}>For Colleges</a>
            <a href="#contact" className="text-gray-700 hover:text-primary font-medium transition-colors py-2 px-4 rounded-md hover:bg-gray-50" onClick={toggleMenu}>Contact</a>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white w-full">
              Login
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
