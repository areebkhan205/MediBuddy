import { motion } from "framer-motion";
import { AlignLeft } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
const conditions = [
  "ADHD",
  "Allergies",
  "Arthritis",
  "Atrial fibrillation",
  "Breast Cancer",
  "Cancer",
  "Crohn's Disease",
  "Depression",
  "Diabetes",
  "DVT",
  "Eczema",
  "Eye Health",
  "Heart Disease",
  "HIV & AIDS",
];

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const navigate= useNavigate()


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleScrollToServices = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      window.location.href = "/#services";
    } else {
      document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const handleScrollToFooter = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      window.location.href = "/#footer";
    } else {
      document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const renderLinks = () => (
    <>
      <motion.li 
      whileHover={{scale:1.3}}
       transition={{ type: "spring", stiffness: 300, damping: 20 }}>
        <Link 
          to="/" 
          className="hover:text-blue-400 text-lg block w-full"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>
      </motion.li>
      <motion.li 
      whileHover={{scale:1.3}}
       transition={{ type: "spring", stiffness: 300, damping: 20 }}>
        <a 
          href="#services" 
          onClick={handleScrollToServices} 
          className="hover:text-blue-400 text-lg block w-full"
        >
          Services
        </a>
      </motion.li>
      <motion.li
      whileHover={{scale:1.3}}
       transition={{ type: "spring", stiffness: 300, damping: 20 }}>
        <Link 
          to="/report" 
          className="hover:text-blue-400 text-lg block w-full"
          onClick={() => setMenuOpen(false)}
        >
          Report
        </Link>
      </motion.li>
      <motion.li
      whileHover={{scale:1.3}}
       transition={{ type: "spring", stiffness: 300, damping: 20 }}>
        <a 
          href="#footer" 
          onClick={handleScrollToFooter} 
          className="hover:text-blue-400 text-lg block w-full"
        >
          Contact
        </a>
      </motion.li>
    </>
  );

  return (
    <div className="w-full">
     
      <nav className="bg-gray-900 rounded-3xl text-white p-4 xl:flex justify-between items-center">
        <button
          className="xl:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <AlignLeft className="h-6 w-6" />
        </button>
        <ul className="hidden xl:flex space-x-25">{renderLinks()}</ul>
      </nav>

      
      <div className={`xl:hidden bg-gray-900 text-white fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        menuOpen ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <ul className="flex flex-col space-y-4 p-6">
          {renderLinks()}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
