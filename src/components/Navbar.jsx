import { motion } from "framer-motion";
import { AlignLeft } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

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

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const location = useLocation();

  const scrollTo = (id) => {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const NavLinks = ({ mobile = false }) => (
    <ul
      className={`flex ${
        mobile ? "flex-col space-y-4" : "space-x-10"
      } text-lg`}
    >
      <motion.li whileHover={{ scale: 1.1 }}>
        <Link to="/" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
      </motion.li>

      <motion.li whileHover={{ scale: 1.1 }}>
        <button onClick={() => scrollTo("services")}>
          Services
        </button>
      </motion.li>

      <motion.li whileHover={{ scale: 1.1 }}>
        <Link to="/report" onClick={() => setMenuOpen(false)}>
          Report
        </Link>
      </motion.li>

      {/* CONDITIONS DROPDOWN (DESKTOP ONLY – SAME UI) */}
      {!mobile && (
        <li
          className="relative"
          onMouseEnter={() => setDropdown(true)}
          onMouseLeave={() => setDropdown(false)}
        >
          <span className="cursor-pointer">Conditions</span>

          {dropdown && (
            <div className="absolute left-0 mt-2 bg-white text-black shadow-lg rounded-lg p-4 w-[400px] grid grid-cols-2 gap-3 z-50">
              {conditions.map((c) => (
                <Link
                  key={c}
                  to={`/conditions/${c.toLowerCase().replace(/\s|\/+/g, "-")}`}
                  className="hover:text-blue-500 border-b pb-1"
                >
                  {c}
                </Link>
              ))}
            </div>
          )}
        </li>
      )}

      <motion.li whileHover={{ scale: 1.1 }}>
        <button onClick={() => scrollTo("footer")}>
          Contact
        </button>
      </motion.li>
    </ul>
  );

  return (
    <div className="w-full">
      {/* TOP BAR */}
      <nav className="bg-gray-900 rounded-3xl text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">MediFlix</h1>

        {/* DESKTOP */}
        <div className="hidden xl:flex">
          <NavLinks />
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="xl:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <AlignLeft className="h-6 w-6" />
        </button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="xl:hidden bg-gray-900 text-white fixed top-0 left-0 right-0 z-50 p-6">
          <NavLinks mobile />
        </div>
      )}
    </div>
  );
}
