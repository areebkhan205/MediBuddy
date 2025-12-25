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
          w-[334px]
          md:w-[1356px]
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
            style={{ fontFamily: "Surgena Personal" }}
            className="
            px-7 py-2
            md:left-0
            relative
            left-[-22px]
              md:px-8 md:py-3
              flex items-center justify-center
             rounded-lg
              text-xl
             md:text-3xl
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
            style={{ fontFamily: "Surgena Personal" }}
            className="relative hidden  md:flex items-center gap-10 md:gap-60 text-white "
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
                hidden 

                w-10 h-10
                md:flex items-center justify-center
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
          {/* From Uiverse.io by SmookyDev */}
<button
  style={{
    WebkitBoxReflect:
      "below 0px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.4))",
  }}
  className="px-4 py-2  md:px-10 md:py-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-full shadow-xl group-hover:shadow-2xl group-hover:shadow-red-600 shadow-red-600 uppercase font-serif tracking-widest relative overflow-hidden group text-transparent cursor-pointer z-10 after:absolute after:rounded-full after:bg-red-200 after:h-[85%] after:w-[95%] after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 hover:saturate-[1.15] active:saturate-[1.4]"
>
  LOGIN

  <p
    className="absolute z-40 font-semibold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent top-1/2 left-1/2 -translate-x-1/2 group-hover:-translate-y-full h-full w-full transition-all duration-300 -translate-y-[30%] tracking-widest"
  >
  LOGIN
  </p>

  <p
    className="absolute z-40 top-1/2 left-1/2 bg-gradient-to-r from-red-700 to-orange-700 bg-clip-text text-transparent -translate-x-1/2 translate-y-full h-full w-full transition-all duration-300 group-hover:-translate-y-[40%] tracking-widest font-extrabold"
  >
    LOGIN
  </p>

  <svg
    className="absolute w-full h-full scale-x-125 rotate-180 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 group-hover:animate-none animate-pulse group-hover:-translate-y-[45%] transition-all duration-300"
    viewBox="0 0 2400 800"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="sssurf-grad" x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopOpacity="1" stopColor="hsl(37, 99%, 67%)" />
        <stop offset="100%" stopOpacity="1" stopColor="hsl(316, 73%, 52%)" />
      </linearGradient>
    </defs>

    <g transform="matrix(1,0,0,1,0,-91.0877685546875)" fill="url(#sssurf-grad)">
      <path opacity="0.05" transform="translate(0,35)" d="M0 306Q600 450 1200 343T2400 314V800H0Z" />
      <path opacity="0.21" transform="translate(0,70)" d="M0 306Q600 450 1200 343T2400 314V800H0Z" />
      <path opacity="0.37" transform="translate(0,105)" d="M0 306Q600 450 1200 343T2400 314V800H0Z" />
      <path opacity="0.53" transform="translate(0,140)" d="M0 306Q600 450 1200 343T2400 314V800H0Z" />
      <path opacity="0.68" transform="translate(0,175)" d="M0 306Q600 450 1200 343T2400 314V800H0Z" />
      <path opacity="0.84" transform="translate(0,210)" d="M0 306Q600 450 1200 343T2400 314V800H0Z" />
      <path opacity="1" transform="translate(0,245)" d="M0 306Q600 450 1200 343T2400 314V800H0Z" />
    </g>
  </svg>

  <svg
    className="absolute w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-[30%] group-hover:-translate-y-[33%] group-hover:scale-95 transition-all duration-500 z-40 fill-red-500"
    viewBox="0 0 1440 320"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0,288L1440,160L1440,320L0,320Z"
      fillOpacity="1"
    />
  </svg>
</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
