const Navbar = () => {
  return (
    <div className="relative">
      {/* Outer Navbar */}
      <div
        className="
          mx-auto mt-[42px]
          w-[1356px] h-[117px]
          rounded-[30px]
          bg-[#232C4A]
          flex items-center
        "
      >
        {/* Inner Content */}
        <div
          className="
            mx-auto
            w-[1240px] h-[52px]
            flex items-center justify-between
          "
        >
          {/* Logo */}
          <div
            className="
              w-[186px] h-[60px]
              flex items-center justify-center
              rounded-full
              font-surgena font-extrabold text-2xl
              bg-gradient-to-r from-[#5C6CCB] to-[#F0379F]
              text-white
            "
          >
            EcoMedX
          </div>

          {/* Nav Links */}
          <div className="flex items-center gap-10 text-white font-medium">
            <span className="px-5 py-2 rounded-full bg-[#6A6FF5]">
              Home
            </span>
            <span className="opacity-80 hover:opacity-100 cursor-pointer">
              FAQ
            </span>
            <span className="opacity-80 hover:opacity-100 cursor-pointer">
              Services
            </span>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-6">
            {/* Search Icon */}
            <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20">
              🔍
            </div>

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
