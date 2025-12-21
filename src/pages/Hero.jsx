import React from "react";
import body from "/public/assets/img/body.png";
import Navbar from "../component/NavBar";
import grid from "/public/assets/img/grid.png";

function Hero() {
  return (
    <div
      className="relative h-screen 
    bg-gradient-to-r from-[#1f7a8c] via-[#0c5766] to-[#022b3a] 
    dark:bg-gradient-to-r dark:from-[#1D2545] dark:via-[#0B0B45] dark:to-[#04090F]
    flex items-center justify-between overflow-hidden pt-20"
    >
      <div className="fixed top-0 left-0 w-full z-50"></div>
      <img
        src={grid}
        className="absolute left-[20px] top-[20px] h-[60%] w-auto z-10 opacity-60"
      />
      <img src={body} className="absolute right-[50px] h-[80%] w-auto z-10" />

      <div className="relative z-20 flex flex-col items-center text-center px-4 ml-[150px] mt-[250px]">
        <h1
          className="text-4xl md:text-6xl font-bold text-[#022b3a] dark:text-[white] mb-4 whitespace-nowrap overflow-hidden border-r-4 border-[#022b3a]"
          style={{
            animation:
              "typing 2.8s steps(30, end), blink .75s step-end infinite",
            textShadow: `
              2px 2px 5px rgba(0,0,0,0.4),  
              0 0 10px rgba(191,219,247,0.5),
              0 0 20px rgba(191,219,247,0.3)
            `,
          }}
        >
          Quality Life Starts Here
        </h1>
        <p
          className="text-lg md:text-2xl text-[#e1e5f2] mb-6 max-w-xl opacity-0 "
          style={{
            animation: "slideUpFade 1.5s ease forwards",
            animationDelay: "2.9s",
          }}
        >
          Experience top-tier diagnostics and evidence-based treatments designed
          to optimize your health and well-being.
        </p>

        <button
          className="bg-[#022b3a] dark:bg-[white] dark:text-[#0B0B45] cursor-pointer hover:bg-[#14373e] text-[#bfdbf7] py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(2,43,58,0.5)] opacity-0"
          style={{
            animation: "fadeInButton 0.8s forwards, pulse 2.5s infinite 5.8s",
            animationDelay: "4s",
          }}
        >
          Book Your Appointment
        </button>
      </div>

      <style>{`
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        @keyframes blink {
          50% { border-color: transparent }
        }
        @keyframes slideUpFade {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInButton {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 15px rgba(2, 43, 58, 0.4); }
          50% { transform: scale(1.05); box-shadow: 0 0 25px rgba(31, 122, 140, 0.7); }
        }
      `}</style>
    </div>
  );
}

export default Hero;
