import React from "react";
import photo1 from "../assets/servicPhoto1.jpeg";
import photo2 from "../assets/servicePhoto2.jpg";
import photo3 from "../assets/servicePhoto3.webp";
import photo4 from "../assets/servicePhoto4.jpg";

const images = [photo1, photo2, photo3, photo4];

const services = [
  {
    title: "Report Analysis for Patients",
    text: " Get AI-powered insights on your medical reports, making it easier to understand diagnoses and track your health progress.Track your progress over time and stay informed about your well-being without medical jargon.",
    reverse: false,
  },
  {
    title: "Doctor Q&A Sessions",
    text: "Connect with expert doctors in real-time, ask health-related questions, and receive instant, reliable advice.second opinions, and personalized recommendations—all from the comfort of your home.",
    reverse: true,
  },
  {
    title: "Image Report Analysis",
    text: " Upload medical images (X-rays, MRIs, etc.), and let AI assist in analyzing and detecting potential health issues.",
    reverse: false,
  },
  {
    title: "Billing & Insurance Assistance",
    text: "Say goodbye to confusing medical bills! Simply upload your X-rays, MRIs, or CT scans, and our AI will quickly analyze them to spot any issues. Get instant insights to help doctors diagnose faster and make better decisions for your health!",
    reverse: true,
  },
];

const Services = () => {
  return (
    <section
      className="bg-gradient-to-b from-[#d6f2ff]/40 to-white/40 text-white py-16 px-6"
    >
      <h2 className="text-4xl font-bold text-center ">Our Services</h2>
      <div className="max-w-6xl mx-auto space-y-16 relative flex flex-col items-center">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center gap-8 w-full"
          >
            {!service.reverse && (
              <div className="md:w-1/2 bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.text}</p>
              </div>
            )}

            //{" "}
            <div className="w-40 h-40 bg-gray-700 rounded-full flex items-center justify-center shadow-lg"></div>
            <div className="w-40 h-40 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center shadow-lg">
              {images.map((image, idx) => (
                <img
                  key={idx}
                  src={image}
                  alt={`Service ${index + 1}`}
                  className="w-full h-full object-cover rounded-full"
                />
              ))}
            </div>



            <div className="w-40 h-40 bg-gray-700 rounded-full flex items-center justify-center shadow-lg"></div>


            
            
            <div className="w-40 h-40 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center shadow-lg">
              {
                images.map((image, idx) => (
                  <img key={idx} src={image} alt={`Service ${index + 1}`} className="w-full h-full object-cover rounded-full" />
                ))
              }
                  
              </div>

            


            {service.reverse && (
              <div className="md:w-1/2 bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-2xl font-semibold ">{service.title}</h3>
                <p className="text-gray-300">{service.text}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
