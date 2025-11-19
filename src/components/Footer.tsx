import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import logo from "../assets/logo.webp";


const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
              {/* <img src="./src/assets/logo.jpg" alt="Logo" className="w-12 h-12 object-contain" />
               */}
                    <img src={logo} alt="Logo" className="w-12 h-12 object-contain" />
              </div>
              <span className="text-lg font-bold">Golfoil Solutions</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
            Leading provider of comprehensive oil and energy solutions backed by proven industry excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
             className="space-y-2 text-sm text-primary-foreground/80">
             <li><Link to="/services">Import & Export</Link></li>
             <li><Link to="/services">Petrochemicals Trading</Link></li>
             <li><Link to="/services">Diesel Products Trading</Link></li>
             <li><Link to="/services">Petroleum Products Trading</Link></li>
             <li><Link to="/services">International Crude Oil Trading</Link></li>
             <li><Link to="/services">Tar & Asphalt Supply & Trading</Link></li>
           </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm text-primary-foreground/80">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <a href="https://www.google.com/maps/search/?api=1&query=P1-ELOB%20Office%20No.%20Hamriyah%20Free%20Zone%20Sharjah%20United%20Arab%20Emirates" 
                target="_blank" 
                rel="noopener noreferrer">
                  P1-ELOB Office No. E2-126F-55, Hamriyah Free Zone, Sharjah, United Arab Emirates
                  </a>
              </li>
              <li className="flex items-center space-x-2 text-sm text-primary-foreground/80">
                <Phone size={18} className="flex-shrink-0" />
                <a href="tel:+971504838939">+971 50 483 8939</a>
              </li>
              <li className="flex items-center space-x-2 text-sm text-primary-foreground/80">
                <Mail size={18} className="flex-shrink-0" />
                {/* <a href="mailto:trade@golfoil.me">trade@golfoil.me</a> */}
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=trade@golfoil.me" target="_blank">trade@golfoil.me</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Golfoil Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
