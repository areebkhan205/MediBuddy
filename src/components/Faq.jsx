
import { useState } from "react";

const faqs = [
  {
    question: "How does the Quick Report View feature work?",
    answer:
      "Our AI instantly analyzes your uploaded medical reports and presents a simplified, easy-to-understand summary within seconds.",
  },
  {
    question: "Is the AI report analysis accurate and reliable?",
    answer:
      "Yes, our AI is trained on validated medical data and reviewed by healthcare professionals for high accuracy.",
  },
  {
    question: "Can I upload images like X-rays or MRIs for analysis?",
    answer:
      "Absolutely! We support image-based uploads for quick and intelligent diagnostics.",
  },
  {
    question: "Can the chatbot diagnose diseases?",
    answer:
      "While the chatbot offers suggestions and insights, we recommend consulting a licensed physician for formal diagnoses.",
  },
  {
    question: "How can the AI help with my medical billing?",
    answer:
      "Just upload your bill or insurance document, and our AI will break it down into understandable terms and spot errors or overcharges.",
  },
  {
    question: "Is my medical data secure on this website?",
    answer:
      "100%. We follow HIPAA-compliant practices to ensure your data is safe, encrypted, and never shared without consent.",
  },
  {
    question: "Do I need a doctor to use this platform?",
    answer:
      "We offer basic features for free, with premium options for advanced tools and personal consultations.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-black min-h-[120vh] flex flex-col items-center justify-start p-10 relative overflow-hidden">
      
      {/* Background dots */}
      <div className="absolute inset-0 bg-[radial-gradient(#444,transparent_1px)] bg-[length:20px_20px] opacity-20 z-0 animate-pulse" />

      {/* Glassy container */}
      <div className="relative bg-white/10 backdrop-blur-xl shadow-2xl rounded-3xl p-12 w-full max-w-6xl overflow-hidden border border-white/20 z-10">

        {/* Gradient blobs */}
        <div className="absolute h-96 -top-40 -left-40 w-96 bg-gradient-to-tr from-pink-400 to-red-400 opacity-40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-500 to-purple-500 opacity-40 rounded-full blur-3xl animate-pulse" />

        {/* FAQ Content */}
        <h2 className="text-4xl font-bold text-white text-center mb-12 z-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-700 rounded-lg overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-4 bg-gray-800 hover:bg-gray-700 text-white transition duration-300"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-left text-lg font-medium">{faq.question}</span>
                <span className="text-xl">{openIndex === index ? "➖" : "➕"}</span>
              </button>
              {openIndex === index && (
                <div className="p-4 bg-gray-900 text-gray-300 text-base leading-relaxed transition-all duration-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}
