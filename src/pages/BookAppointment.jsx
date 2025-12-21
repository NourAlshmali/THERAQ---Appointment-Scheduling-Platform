import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../component/Sidebar";
import Data from "/doctors.json";
import { FaHeartbeat, FaBrain, FaUserMd, FaChild } from "react-icons/fa";

const BookAppointment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const doctor = Data.find((doc) => doc.id === parseInt(id));

  const [selectedTime, setSelectedTime] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    notes: "",
  });

  if (!doctor) {
    return (
      <div className="flex h-screen items-center justify-center text-2xl text-[#022b3a]">
        Doctor not found.
      </div>
    );
  }

  const specialtyIcons = {
    Cardiology: <FaHeartbeat className="text-[#1f7a8c]" />,
    Dermatology: <FaUserMd className="text-[#1f7a8c]" />,
    Neurology: <FaBrain className="text-[#1f7a8c]" />,
    Pediatrics: <FaChild className="text-[#1f7a8c]" />,
  };

  const handleTimeSelect = (date, time) => {
    setSelectedTime({ date, time });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    if (!selectedTime) return;

    // التوجيه لصفحة ConfirmAppointment مع البيانات
    navigate("/confirm", {
      state: {
        doctor,
        selectedTime,
        formData,
      },
    });
  };

  return (
    <div className="flex h-screen bg-[#d5defd]">
      <Sidebar
        cardConfigs={[
          {
            id: 1,
            bg: "bg-[#e1e5f2] dark:bg-[#fff]",
            border: "border-[#485666]",
          },
          {
            id: 2,
            bg: "bg-[#e1e5f2] dark:bg-[#fff]",
            border: "border-[#1f7a8c] dark:border-[#485666]",
          },
          {
            id: 3,
            bg: "bg-[#1f7a8c] dark:bg-[#485666]",
            border: "border-[#e1f7a8c] dark:border-[#fff]",
          },
          {
            id: 4,
            bg: "bg-[#e1e5f2] dark:bg-[#fff]",
            border: "border-[#1f7a8c] dark:border-[#485666]",
          },
        ]}
      />

      <div className="w-[70%] overflow-y-auto flex flex-col bg-[#1f7a8c] dark:bg-[#0B0B45] items-center p-6">
        <div className="flex items-center gap-4 mb-8 w-full max-w-5xl bg-white rounded-2xl shadow-lg p-6">
          <img
            src={doctor.photo}
            alt={doctor.name}
            className="w-24 h-24 rounded-full border-4 dark:border-[#0B0B45] border-[#1f7a8c]"
          />
          <div>
            <h2 className="text-2xl font-bold">{doctor.name}</h2>
            <p className="flex items-center gap-2 dark:text-[#0B0B45] text-[#1f7a8c] font-medium">
              {specialtyIcons[doctor.specialty]} {doctor.specialty}
            </p>
          </div>
        </div>

        {/* مواعيد الدكتور لكل الأيام */}
        {doctor.availableSlots.map((slot, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-5xl mb-6"
          >
            <h3 className="text-xl font-semibold mb-4 text-[#022b3a]">
              {new Date(slot.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </h3>

            <div className="flex flex-wrap gap-3">
              {slot.times.map((time, idx) => {
                const isSelected =
                  selectedTime?.date === slot.date &&
                  selectedTime?.time === time;

                return (
                  <button
                    key={idx}
                    onClick={() => handleTimeSelect(slot.date, time)}
                    className={`px-4 py-2 rounded-lg transition ${
                      isSelected
                        ? "bg-[#022b3a] text-white"
                        : "bg-[#1f7a8c] dark:bg-[#0B0B45] text-white hover:bg-[#022b3a]"
                    }`}
                  >
                    {time}
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        {/* فورم الحجز */}
        <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-5xl mb-6">
          <h3 className="text-xl font-semibold mb-4 text-[#022b3a]">
            Patient Information
          </h3>
          <form onSubmit={handleConfirm} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 dark:focus:ring-[#0B0B45] focus:ring-[#1f7a8c]"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 dark:focus:ring-[#0B0B45] focus:ring-[#1f7a8c]"
            />
            <textarea
              name="notes"
              placeholder="Additional Notes"
              value={formData.notes}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 dark:focus:ring-[#0B0B45] focus:ring-[#1f7a8c] resize-none"
            />

            <button
              type="submit"
              disabled={!selectedTime}
              className={`px-6 py-3 rounded-lg font-semibold text-white transition ${
                selectedTime
                  ? "bg-[#1f7a8c] dark:bg-[#0B0B45] hover:bg-[#022b3a]"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              Confirm Appointment
            </button>
          </form>
          <button
            onClick={() => navigate(-1)}
            className="text-[#1f7a8c] dark:text-[#0B0B45] font-medium hover:underline"
          >
            ← Back to Doctor Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
