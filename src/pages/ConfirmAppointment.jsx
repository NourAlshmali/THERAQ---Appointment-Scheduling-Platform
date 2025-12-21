import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../component/Sidebar";

const ConfirmAppointment = () => {
  const { state } = useLocation();
  const { doctor, selectedTime, formData } = state;
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleBookNow = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="flex h-screen bg-[#d5defd]">
      <Sidebar
        cardConfigs={[
          { id: 1, bg: "bg-[#e1e5f2] dark:bg-[#fff]", border: "border-[#1f7a8c] dark:border-[#485666]" },
          { id: 2, bg: "bg-[#e1e5f2] dark:bg-[#fff]", border: "border-[#1f7a8c] dark:border-[#485666]" },
          { id: 3, bg: "bg-[#e1e5f2] dark:bg-[#fff]", border: "border-[#1f7a8c] dark:border-[#485666]" },
          { id: 4, bg: "bg-[#1f7a8c] dark:bg-[#485666]", border: "border-[#e1f7a8c] dark:border-[#fff]" },
        ]}
      />

      <div className="w-[70%] bg-[#1f7a8c] dark:bg-[#0B0B45] flex flex-col items-center justify-center p-6">
        <div className="bg-[#e1e5f2] rounded-2xl shadow-lg p-10 w-full max-w-2xl h-[750px] text-center">
          <h2 className="text-4xl font-bold mb-6 text-black">
            Appointment Summary
          </h2>

          <div className="flex flex-col items-center gap-4 mb-6">
            <img
              src={doctor.photo}
              alt={doctor.name}
              className="w-32 h-32 rounded-full border-4 dark:border-[#0B0B45] border-[#1f7a8c]"
            />
            <div>
              <h3 className="text-3xl font-semibold text-black">
                {doctor.name}
              </h3>
              <p className="text-2xl text-black">{doctor.specialty}</p>
              <p className="text-xl text-black">{doctor.location}</p>
            </div>
          </div>

          <div className="mb-6 flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-3 text-black">
              Patient Information:
            </h3>
            <p className="text-xl mb-2">
              <strong>Name:</strong> {formData.name}
            </p>
            <p className="text-xl mb-2">
              <strong>Phone:</strong> {formData.phone}
            </p>
            {formData.notes && (
              <p className="text-xl">
                <strong>Notes:</strong> {formData.notes}
              </p>
            )}
          </div>

          <div className="mb-6 flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-3 text-black">
              Appointment Details:
            </h3>
            <p className="text-xl mb-2">
              <strong>Date:</strong>{" "}
              {new Date(selectedTime.date).toLocaleDateString()}
            </p>
            <p className="text-xl">
              <strong>Time:</strong> {selectedTime.time}
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 mt-4">
            <button
              onClick={handleBookNow}
              className="bg-[#1f7a8c] dark:bg-[#0B0B45] text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition font-bold text-xl"
            >
              BOOK NOW
            </button>
          </div>
        </div>
        <button
          onClick={handleGoHome}
          className="bg-white mt-[50px] text-[#1f7a8c] dark:bg-[#485666] dark:text-[white] px-8 py-4 rounded-lg hover:bg-gray-700 transition font-bold text-xl"
        >
          GO TO HOME
        </button>

        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 backdrop-blur-md"></div>
            <div className="relative bg-black p-6 rounded-2xl shadow-lg text-center max-w-sm z-10">
              <h3 className="text-2xl text-white font-bold mb-4">
                Appointment Confirmed!
              </h3>
              <p className="text-lg text-white">
                Thank you, {formData.name}, your appointment has been booked.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConfirmAppointment;
