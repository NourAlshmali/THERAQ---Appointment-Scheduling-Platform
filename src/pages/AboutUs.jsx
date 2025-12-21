import React from "react";

const AboutUs = () => {
  return (
    <section
      className="min-h-screen
    dark:bg-gradient-to-r dark:from-[#1D2545] dark:via-[#0B0B45] dark:to-[#04090F]
     bg-gradient-to-r from-[#e1e5f2] via-[#bfdbf7] to-[#d5defd]
      text-[#022b3a]
      py-16 px-6 md:px-20 overflow-hidden"
    >
      <style>
        {`
          @keyframes fade-in-down {
            0% { opacity: 0; transform: translateY(-20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          @keyframes fade-in-up {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          .animate-fade-in-down {
            animation: fade-in-down 0.8s ease-out forwards;
          }

          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out forwards;
          }

          /* ✨ Hover effect like Reviews */
          .hover-animate:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 25px rgba(0,0,0,0.2);
          }

          .transition-smooth {
            transition: all 0.5s ease;
          }
        `}
      </style>

      <div className="text-center mb-12 animate-fade-in-down">
        <h1 className="text-4xl md:text-5xl font-bold  dark:text-white text-[#022b3a] mb-4">
          About <span className="text-[#1f7a8c]  dark:text-white ">Us</span>
        </h1>
        <p className="text-lg md:text-xl text-[#0c5766]  dark:text-white max-w-3xl mx-auto">
          We are committed to making healthcare more accessible, modern, and
          patient-focused — helping you find the right doctor with ease and
          confidence.
        </p>
      </div>

      <div
        className="bg-white rounded-3xl dark:bg-[#e1e5f2]  shadow-xl p-10 md:p-16 max-w-5xl mx-auto mb-16 animate-fade-in-up hover-animate transition-smooth"
        style={{ animationDelay: "0.2s" }}
      >
        <h2 className="text-2xl font-semibold text-[#1f7a8c] dark:text-[#485666] mb-4">
          Who We Are
        </h2>
        <p className="text-gray-700 dark:text-[#485666] text-lg leading-relaxed">
          Our platform was founded with the goal of simplifying the way patients
          connect with medical professionals. Whether you're searching for a
          cardiologist, pediatrician, or dermatologist, our system provides
          reliable doctor profiles, verified reviews, and instant booking
          options — all in one place.
        </p>
      </div>

      <div
        className="grid md:grid-cols-2  gap-10 max-w-6xl mx-auto mb-20"
        style={{ animationDelay: "0.4s" }}
      >
        <div
          className="bg-white dark:bg-[#e1e5f2]
        text-white p-10 rounded-2xl shadow-lg hover-animate transition-smooth animate-fade-in-up"
        >
          <h3 className="text-2xl text-[#1f7a8c] dark:text-[#485666] font-semibold mb-3">
            Our Mission
          </h3>
          <p className="text-gray-700 dark:text-[#485666] text-lg leading-relaxed">
            To make medical care more transparent, efficient, and patient-first
            by connecting users to trusted doctors and clinics instantly.
          </p>
        </div>
        <div
          className="bg-white
           dark:bg-[#e1e5f2]
        text-white p-10 rounded-2xl shadow-lg hover-animate transition-smooth animate-fade-in-up"
        >
          <h3 className="text-2xl text-[#1f7a8c] dark:text-[#485666] font-semibold mb-3">
            Our Vision
          </h3>
          <p className="text-gray-700 dark:text-[#485666] text-lg leading-relaxed">
            To become the most reliable digital health companion for patients
            across the region — where healthcare meets innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
