import { motion } from "framer-motion";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
const conditions = [
  "ADD/ADHD",
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

export function NavItems({ className }) {
  const location = useLocation();
  const [dropdown, setDropdown] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null); // Add state for timeout

  const handleScrollToServices = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      window.location.href = "/#services";
    } else {
      document
        .getElementById("services")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToFooter = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      window.location.href = "/#footer";
    } else {
      document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Show dropdown immediately
  const handleMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId); // Clear any existing timeout
    }
    setDropdown(true);
  };

  // Hide dropdown with delay
  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setDropdown(false);
    }, 200); // 200ms delay, adjust as needed
    setTimeoutId(id);
  };

  return (
    <>
      <div>
        <ul className={`flex space-x-10 ${className}`}>
          <motion.li
          whileHover={{scale:1.04}}>
             transition={{ type: "spring", stiffness: 300, damping: 20 }}
            <Link to="/" className="hover:text-blue-400 text-lg ">
              Home
            </Link>
          </motion.li>
          <li>
            <a
              href="#footer"
              onClick={handleScrollToServices}
              className="hover:text-blue-400 text-lg"
            >
              Services
            </a>
          </li>
          <li>
            <Link to="/report" className="hover:text-blue-400 text-lg">
              Report
            </Link>
            <Link to="/blog" className="hover:text-blue-400 text-lg">
              Blog
            </Link>
          </li>

          {/* Dropdown Wrapper */}
          <div
            className="relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span className="hover:text-blue-400 cursor-pointer text-lg">
              Conditions
            </span>

            {dropdown && (
              <div
                className="absolute left-0 mt-2 bg-white text-black shadow-lg rounded-lg p-4 w-[400px] grid grid-cols-1 md:grid-cols-2 gap-3 z-50"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {conditions.map((condition) => (
                  <Link
                    key={condition}
                    to={`/conditions/${condition
                      .toLowerCase()
                      .split("/")
                      .join("/")}`}
                    className="hover:text-blue-500 border-b pb-1 block"
                  >
                    {condition}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <li>
            <a
              href="#footer"
              onClick={handleScrollToFooter}
              className="hover:text-blue-400 text-lg"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
