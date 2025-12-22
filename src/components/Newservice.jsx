import React from "react";
import '../styles/Services.css';

const services = [
  {
    parts: ["Report Analysis", " for Patients"],
    text: "Get AI-powered insights on your medical reports, making it easier to understand diagnoses and track your health progress. Track your progress over time and stay informed about your well-being without medical jargon.",
  },
  {
    parts: ["Doctor Q&A", " Sessions"],
    text: "Connect with expert doctors in real-time, ask health-related questions, and receive instant, reliable advice, second opinions, and personalized recommendations—all from the comfort of your home.",
  },
  {
    parts: ["Image Report", " Analysis"],
    text: "Upload medical images (X-rays, MRIs, etc.), and let AI assist in analyzing and detecting potential health issues.",
  },
  {
    parts: ["Billing & Insurance", " Assistance"],
    text: "Say goodbye to confusing medical bills! Our AI analyzes scans and helps identify medical issues instantly—supporting faster, more accurate diagnoses and simplifying your insurance claims.",
  },
];

export default function NFTLandingPage() {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-black min-h-[120vh] flex flex-col items-center justify-start p-10 relative overflow-hidden">
      
      <h2 className="text-4xl font-bold text-white text-center mb-16 z-10">
        Our Services
      </h2>

      {/* Background dots */}
      <div className="absolute inset-0 bg-[radial-gradient(#444,transparent_1px)] bg-[length:20px_20px] opacity-20 z-0 animate-pulse" />

      {/* Glassy container */}
      <div className="relative bg-white/10 backdrop-blur-xl shadow-2xl rounded-3xl p-12 w-full max-w-7xl overflow-hidden border border-white/20 z-10">

        {/* Gradient blobs */}
        <div className="absolute h-96 -top-40 -left-40 w-96 bg-gradient-to-tr from-red-500 to-purple-500 opacity-40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-500 to-purple-500 opacity-40 rounded-full blur-3xl animate-pulse" />

        {/* Zigzag layout */}
        <div className="space-y-16 relative z-10">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row hover:scale-105 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } items-center justify-center gap-10`}
            >
              <div className="bg-gray-800 p-8 rounded-2xl shadow-xl text-white text-center max-w-2xl w-full">
                <h3 className="text-xl font-semibold mb-4 tracking-wide cursor-pointer">
                  <span className="text-purple-400">{service.parts[0]}</span>
                  <span className="text-blue-400">{service.parts[1]}</span>
                </h3>
                <p className="text-gray-300 text-base leading-relaxed">
                  {service.text}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
