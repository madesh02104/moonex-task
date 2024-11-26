import { useState } from 'react';
import logo from '../assets/logo.png'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="relative py-4 px-6 md:px-12 flex justify-between items-center">
      <div className="flex items-center">
        <img src={logo} alt="MoonEX" className="h-8 mr-4" />
        
        <nav className="hidden md:flex space-x-6 gap-16 px-16 font-medium">
          <a href="#" className="text-secondary hover:text-primary transition-colors duration-300">Home</a>
          <a href="#" className="text-secondary hover:text-primary transition-colors duration-300">About Us</a>
          <a href="#" className="text-secondary hover:text-primary transition-colors duration-300">Roadmap</a>
          <a href="#" className="text-secondary hover:text-primary transition-colors duration-300">FAQs</a>
          <a href="#" className="text-secondary hover:text-primary transition-colors duration-300">Contact Us</a>
        </nav>
      </div>

      <button className="bg-primary text-tertiary px-6 py-2 rounded-full hover:bg-opacity-80 transition-colors duration-300 hidden md:block">
        Connect Wallet
      </button>

      <div className="md:hidden">
        <button 
          onClick={toggleMobileMenu} 
          className="z-50 relative"
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-background z-40 md:hidden">
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-6">
              <img src={logo} alt="MoonEX" className="h-8" />
              <button onClick={closeMobileMenu} className="text-2xl">✕</button>
            </div>

            <nav className="flex flex-col items-center space-y-6 mt-12">
              <a 
                href="#" 
                onClick={closeMobileMenu} 
                className="text-xl text-secondary hover:text-primary"
              >
                Home
              </a>
              <a 
                href="#" 
                onClick={closeMobileMenu} 
                className="text-xl text-secondary hover:text-primary"
              >
                About Us
              </a>
              <a 
                href="#" 
                onClick={closeMobileMenu} 
                className="text-xl text-secondary hover:text-primary"
              >
                Roadmap
              </a>
              <a 
                href="#" 
                onClick={closeMobileMenu} 
                className="text-xl text-secondary hover:text-primary"
              >
                FAQs
              </a>
              <a 
                href="#" 
                onClick={closeMobileMenu} 
                className="text-xl text-secondary hover:text-primary"
              >
                Contact Us
              </a>

              <button 
                className="bg-primary text-tertiary px-8 py-3 rounded-full hover:bg-opacity-80 mt-6"
                onClick={closeMobileMenu}
              >
                Connect Wallet
              </button>

            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;