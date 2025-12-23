import { motion } from "framer-motion";
import { AlignLeft } from "lucide-react";
import { useState } from "react";

export default function HomeNewPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-black min-h-screen flex items-center justify-center p-10 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#444,transparent_1px)] bg-[length:20px_20px] opacity-20 z-0 animate-pulse" />

      <div className="relative bg-white/10 backdrop-blur-xl shadow-2xl rounded-3xl p-12 w-full max-w-7xl overflow-hidden border border-white/20 z-10">
        {/* Glows */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-tr from-pink-500 to-purple-500 opacity-40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-500 to-purple-500 opacity-40 rounded-full blur-3xl animate-pulse" />

        {/* Navbar */}
        <nav className="flex justify-between items-center mb-12 relative z-20">
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-xl shadow-lg tracking-wide max-xl:hidden">
            EcoMedX
          </h1>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="hidden max-xl:block"
          >
            <AlignLeft className="h-12 w-12 text-white" />
          </button>
          <div className="space-x-8 text-gray-300 text-lg font-medium max-xl:hidden">
            {/* <Navbar isOpen={mobileMenuOpen} /> */}
          </div>
        <motion.button
        whileHover={{scale:1.3}}
       transition={{ type: "spring", stiffness: 300, damping: 20 }}
  className="
    font-medium
    text-white
    bg-white/10
    backdrop-blur-md
    border border-white/20
    px-6 py-2
    rounded-full
    
  "
  onClick={() => (window.location.href = '/signup')}
>
  Sign Up
</motion.button>


        </nav>

        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-20 relative z-10">
          {/* LEFT: Text Content */}
          <div className="md:w-1/2 space-y-8 max-xl:w-full">
            <h2 className="text-6xl md:text-7xl  leading-tight tracking-tight text-white drop-shadow-xl"
             style={{ fontFamily: "Satoshi" }}>
  Smarter Care Starts With Us.
</h2>

            <p className="text-gray-300 text-xl leading-relaxed max-w-md">
             AI-Powered Care, Built for Doctors and Patients
            </p>
           
              <button className="px-8 py-4 text-lg rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-xl hover:scale-105 transform transition-all duration-300">
                Join Now
              </button>
          
            <div className="mt-8 border-t border-gray-700 pt-6">
              <h3 className="font-bold text-2xl text-white mb-1">
                Better Information, Better Health
              </h3>
              <p className="text-gray-400 text-sm">
               Clinical intelligence. Human-centered care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
