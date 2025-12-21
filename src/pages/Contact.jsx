import React from "react";
import { useState } from "react";

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleBookNow = (e) => {
    e.preventDefault(); // يمنع إعادة تحميل الصفحة
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  return (
    <section
      className="min-h-screen 
    bg-gradient-to-r from-[#e1e5f2] via-[#bfdbf7] to-[#d5defd]
    dark:bg-gradient-to-r dark:from-[#1D2545] dark:via-[#0B0B45] dark:to-[#04090F]
    py-16 px-6 md:px-20 overflow-hidden"
    >
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.8s ease forwards;
          }
        `}
      </style>

      <div className="text-center mb-12 animate-fadeIn">
        <h1 className="text-4xl  dark:text-white md:text-5xl font-bold text-[#022b3a] mb-4">
          Contact <span className="text-[#1f7a8c] dark:text-white">Us</span>
        </h1>
        <p className="text-lg md:text-xl dark:text-white text-[#0c5766] max-w-3xl mx-auto">
          Have questions or need assistance? Reach out to us and we’ll get back
          to you promptly.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 animate-fadeIn">
        <div
          className="flex flex-col gap-6 bg-white dark:bg-[#e1e5f2]
        p-10 rounded-3xl shadow-xl"
        >
          <h2 className="text-3xl font-semibold text-[#1f7a8c] dark:text-[#0B0B45]  mb-4">
            Contact Info
          </h2>
          <p className="text-gray-700 dark:text-[#0B0B45] text-lg">
            Thera Q Clinic is here to provide you with the best medical care and
            support.
          </p>
          <div className="flex flex-col gap-2 text-gray-700 dark:text-[#0B0B45] text-lg">
            <span>📧 Email: info@TheraQ.com</span>
            <span>📞 Phone: +123 456 7890</span>
            <span>📍 Address: 123 Health St, City, Country</span>
            <span>⏰ Working Hours: Mon-Fri 8am - 6pm</span>
          </div>
        </div>

        <form
          className="flex flex-col gap-6 bg-white dark:text-[#0B0B45]
        p-10 rounded-3xl shadow-xl"
        >
          <h2 className="text-3xl font-semibold text-[#1f7a8c] dark:text-[#0B0B45] mb-4">
            Send a Message
          </h2>
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 dark:border-[#0B0B45] rounded-lg p-3 text-gray-700 dark:text-[#0B0B45] focus:outline-none focus:ring-2 focus:ring-[#1f7a8c] dark:focus:ring-[#0B0B45] "
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded-lg p-3 dark:border-[#0B0B45] text-gray-700 dark:text-[#0B0B45] focus:outline-none focus:ring-2 dark:focus:ring-[#0B0B45] focus:ring-[#1f7a8c]"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="border border-gray-300 rounded-lg p-3 dark:border-[#0B0B45] text-gray-700 dark:text-[#0B0B45] focus:outline-none focus:ring-2 focus:ring-[#1f7a8c] dark:focus:ring-[#0B0B45] "
          />
          <button
            onClick={handleBookNow}
            type="submit"
            className="bg-[#1f7a8c] dark:bg-[#0B0B45] text-white px-6 py-3 rounded-lg hover:bg-[#323274] transition font-semibold"
          >
            Send Message
          </button>
        </form>
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 backdrop-blur-md"></div>
            <div className="relative bg-black p-6 rounded-2xl shadow-lg text-center max-w-sm z-10">
              <h3 className="text-2xl text-white font-bold mb-4">
                Your message has been sent
              </h3>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
