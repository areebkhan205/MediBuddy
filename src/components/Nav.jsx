import { motion } from "framer-motion";
import { useState } from "react";
import "../index.css";

const Navbar = () => {
  const [active, setActive] = useState("home");

  return (
    <div className="relative w-full">
      {/* Outer Navbar */}
      <div
        className="
          mx-auto 
          max-w-[1456px]
          rounded-[30px]
          bg-[#232C4A]
          px-7 py-[18px]
          flex items-center
          relative top-10 z-10
        "
      >
        {/* Inner Content */}
        <div className="w-full flex items-center justify-between">

          {/* Logo */}
          <div
            style={{ fontFamily: "Surgena" }}
            className="
              px-10 py-3
              flex items-center justify-center
              rounded-full
              font-semibold text-3xl
              bg-gradient-to-r from-[#5C6CCB] to-[#F0379F]
              text-white
              cursor-pointer
              hover:scale-[1.02]
              transition
            "
          >
            EcoMedX
          </div>

          {/* Nav Links */}
          <nav
            style={{ fontFamily: "Surgena" }}
            className="relative flex items-center gap-10 md:gap-60 text-white font-medium"
          >
            {/* Moving Rectangle */}
            <motion.div
              className="
                absolute
                h-[52px]
                w-[140px]
                rounded-full
                bg-[#5C6CCB4D]
                shadow-md
                -z-10
              "
              animate={{
                x:
                  active === "home"
                    ? 0
                    : active === "faq"
                    ? 280
                    : 590,
              }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 18,
              }}
            />

            {/* Home */}
            <motion.button
              onMouseEnter={() => setActive("home")}
              whileHover={{ scale: 1.3 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
              }}
              className="px-5 py-2 rounded-full text-[23px]"
            >
              Home
            </motion.button>

            {/* FAQ */}
            <motion.button
              onMouseEnter={() => setActive("faq")}
              whileHover={{ scale: 1.3 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
              }}
              className="opacity-80 text-2xl hover:opacity-100"
            >
              FAQ
            </motion.button>

            {/* Services */}
            <motion.button
              onMouseEnter={() => setActive("services")}
              whileHover={{ scale: 1.3 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
              }}
              className="opacity-80 text-2xl hover:opacity-100"
            >
              Services
            </motion.button>
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-6">

            {/* Search Button */}
            <button
              aria-label="Search"
              className="
                relative
                w-10 h-10
                flex items-center justify-center
                rounded-full
                border border-white/20
                bg-[#212121]
                text-white
                overflow-hidden
                transition-all duration-[600ms]
                ease-[cubic-bezier(0.23,1,0.32,1)]
                shadow-[5px_5px_2px_rgba(0,0,0,0.15),2px_2px_2px_rgba(0,0,0,0.1),-3px_-3px_2px_rgba(255,255,255,0.05),-2px_-2px_1px_rgba(255,255,255,0.05)]
                hover:shadow-none
                active:scale-95
                before:content-['']
                before:absolute
                before:w-[150%]
                before:h-[150%]
                before:bg-white
                before:left-0
                before:bottom-0
                before:translate-x-[-100%]
                before:translate-y-[100%]
                before:rotate-45
                before:rounded-xl
                before:transition-all
                before:duration-[600ms]
                hover:before:translate-x-[15%]
                hover:before:translate-y-[-15%]
              "
            >
              <span className="relative z-10 transition-transform duration-300 hover:scale-125">
                🔍
              </span>
            </button>

            {/* Login Button */}
            <button
              className="
                px-6 py-2
                rounded-full
                border border-purple-500
                text-purple-400
                hover:bg-purple-500 hover:text-white
                transition
              "
            >
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
