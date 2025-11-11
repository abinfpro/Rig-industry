import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo1.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border z-50 transition-all duration-300 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center space-x-2 group">
          <div className="w-30 h-30 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-[1.02]">
            <img src={logo} alt="Logo1" className="w-28 h-28 object-contain" />
          </div>

            {/* <span className="text-xl font-bold text-primary hidden sm:block transition-colors duration-300 group-hover:text-accent">GOLFOIL</span> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {links.map((link) => (  
              <Link
                key={link.path}
                to={link.path}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className={`px-4 py-2 rounded-md transition-all duration-300 relative ${
                  isActive(link.path)
                    ? "text-accent font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-accent"
                    : "text-foreground hover:text-accent hover:bg-secondary/50 hover:scale-105"
                }`}
              >
                {link.name}
              </Link>
            ))}
            {/* <Button className="ml-4 bg-gradient-accent hover:opacity-90 text-primary font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Get Quote
            </Button> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-2 rounded-md transition-colors ${
                  isActive(link.path)
                    ? "text-accent font-semibold bg-secondary"
                    : "text-foreground hover:text-accent hover:bg-secondary"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <Button className="w-full bg-gradient-accent hover:opacity-90 text-primary font-semibold">
                Get Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
