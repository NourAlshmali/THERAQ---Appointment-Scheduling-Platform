import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "/src/component/Sidebar";
import Data from "/doctors.json";
import {
  FaMapMarkerAlt,
  FaHeartbeat,
  FaBrain,
  FaUserMd,
  FaChild,
} from "react-icons/fa";
function DoctorDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const doctor = Data.find((doc) => doc.id === parseInt(id));

  const specialtyIcons = {
    Cardiology: <FaHeartbeat className="text-[#1f7a8c]" />,
    Dermatology: <FaUserMd className="text-[#1f7a8c]" />,
    Neurology: <FaBrain className="text-[#1f7a8c]" />,
    Pediatrics: <FaChild className="text-[#1f7a8c]" />,
  };

  if (!doctor) {
    return (
      <div className="flex h-screen bg-[#d5defd] items-center justify-center text-2xl text-[#022b3a]">
        Doctor not found.
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-[#d5defd]">
      <Sidebar
        cardConfigs={[
          {
            id: 1,
            bg: "bg-[#e1e5f2] dark:bg-[#fff]",
            border: "border-[#1f7a8c] dark:border-[#485666]",
          },
          {
            id: 2,
            bg: "bg-[#1f7a8c] dark:bg-[#485666] ",
            border: "border-[#e1e5f2] dark:border-[#fff]",
          },
          {
            id: 3,
            bg: "bg-[#e1e5f2] dark:bg-[#fff]",
            border: "border-[#1f7a8c] dark:border-[#485666]",
          },
          {
            id: 4,
            bg: "bg-[#e1e5f2] dark:bg-[#fff]",
            border: "border-[#1f7a8c] dark:border-[#485666]",
          },
        ]}
      />

      <div className="w-[70%] bg-[#1f7a8c] dark:bg-[#0B0B45] p-10 text-white overflow-y-auto flex justify-center items-center">
        <div className="bg-[#e1e5f2] rounded-2xl p-8 text-black shadow-lg max-w-3xl w-full">
          <div className="flex items-center gap-6 mb-6">
            <img
              src={doctor.photo}
              alt={doctor.name}
              className="w-28 h-28 rounded-full object-cover border-4 dark:border-[#485666] border-[#1f7a8c]"
            />
            <div>
              <h1 className="text-3xl dark:text-[#0B0B45] font-bold">
                {doctor.name}
              </h1>
              <p className="flex items-center gap-2 dark:text-[#485666] text-[#1f7a8c] font-medium">
                {specialtyIcons[doctor.specialty]} {doctor.specialty}
              </p>
              <p className="flex items-center gap-2 text-gray-600 mt-1">
                <FaMapMarkerAlt /> {doctor.location}
              </p>
            </div>
          </div>

          <p className="text-gray-700 mb-6">{doctor.bio}</p>

          <h2 className="text-xl font-semibold mb-3 dark:text-[#0B0B45]">
            Available Slots
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {doctor.availableSlots.map((slot, index) => (
              <div
                key={index}
                className="bg-[#bfdbf7] dark:bg-[#485666] rounded-lg p-4 shadow-md text-center"
              >
                <p className="font-semibold mb-2 dark:text-[white] text-[#022b3a]">
                  {new Date(slot.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {slot.times.map((time, idx) => (
                    <span
                      key={idx}
                      className="bg-white dark:text-[#022b3a] text-[#1f7a8c] px-3 py-1 rounded-lg text-sm font-medium border border-[#1f7a8c]"
                    >
                      {time}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between">
            <button
              onClick={() => navigate(-1)}
              className="text-[#1f7a8c] dark:text-[#0B0B45] font-medium hover:underline"
            >
              ← Back to Doctors List
            </button>
            <button
              onClick={() => navigate(`/book/${doctor.id}`)}
              className="bg-[#1f7a8c] dark:bg-[#0B0B45] text-white px-6 py-3 rounded-lg hover:bg-[#022b3a] transition font-semibold"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorDetails;
