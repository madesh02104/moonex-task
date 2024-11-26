import { FaTwitter, FaDiscord, FaTelegram } from 'react-icons/fa';
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className="bg-background py-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-8 md:mb-0">
          <img src={logo} alt="MoonEX" className="h-8" />
        </div>
        <div className="flex space-x-6">
          
            
          <a href="#"
            className="text-secondary hover:text-primary transition-colors duration-300">
            <FaTwitter className="h-6 w-6" />
          </a>
          
           
          <a  href="#"
            className="text-secondary hover:text-primary transition-colors duration-300">
            <FaDiscord className="h-6 w-6" />
          </a>
          
            
          <a href="#"
            className="text-secondary hover:text-primary transition-colors duration-300">
            <FaTelegram className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;