import { AlignLeft } from "lucide-react";
import { useState } from "react";
import circle from "../assets/circle1.png";
export default function HomeNewPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

return (
  <div className="bg-gradient-to-br from-[#101727] to-[#1D2939] min-h-screen flex items-center justify-center p-10 relative overflow-hidden">
     <div className="relative w-[461px] h-[461px] right-[51px] bottom-[70px] z-[10px] ">
    <img src={circle} />
  </div>
      {/* Background grid */}
       {/* bg-[radial-gradient(#444,transparent_1px)] bg-[length:20px_20px] */}
      <div className="absolute inset-0 opacity-3 z-0" />

   <div className="
  relative
  bg-[#4F46E5]/10
  backdrop-blur-[10px]
  shadow-2xl
  rounded-[40px]
  p-12
  w-[2100px]
  max-w-[2600px]
  h-[713px]
  mx-auto
  right-[160px]
  top-[50px]
  overflow-hidden
  z-10
">
        {/* Glows */}
        <div className="absolute -top-40 -left-40 w-96 h-96  opacity-40 rounded-full " />
        <div className="absolute -bottom-40 -right-40 w-96 h-96  opacity-40 rounded-full blur-3xl animate-pulse" />

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
