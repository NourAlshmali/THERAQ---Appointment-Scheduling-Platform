import React from "react";
import Logo from "/public/assets/img/logo.png";

const Footer = () => {
  return (
    <footer
      className="bg-gradient-to-r from-[#1f7a8c] via-[#0c5766] to-[#022b3a]
     dark:bg-gradient-to-r dark:from-[#1D2545] dark:via-[#0B0B45] dark:to-[#04090F]
    text-white py-12 px-6 md:px-20 overflow-hidden"
    >
      <style>
        {`
          @keyframes fade-in-up {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out forwards;
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <div
          className="flex items-center gap-3 animate-fade-in-up"
          style={{ animationDelay: "0s" }}
        >
          <img
            src={Logo}
            alt="Logo"
            className="w-50 h-50 object-contain mr-[100px] rounded-full border-2 border-white p-1"
          />
          <div>
            <h3 className="text-xl font-bold">Thera Q</h3>
            <p className="text-sm text-[#bfdbf7] max-w-xs">
              Providing modern, patient-focused healthcare with trusted doctors
              and seamless appointment booking.
            </p>
          </div>
        </div>

        <div
          className="flex flex-col gap-2 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <h4 className="font-semibold text-lg">Contact</h4>
          <span>📧 info@medconnect.com</span>
          <span>📞 +123 456 7890</span>
          <span>📍 123 Health St, City, Country</span>
        </div>

        <div
          className="flex flex-col gap-2 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <h4 className="font-semibold text-lg">Legal</h4>
          <span>© 2025 MedConnect. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
