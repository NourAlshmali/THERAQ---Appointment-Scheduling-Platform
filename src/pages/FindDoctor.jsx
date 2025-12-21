// FindDoctor.jsx
import React, { useState, useEffect } from "react";
import Sidebar from "/src/component/Sidebar";
import Data from "/doctors.json";
import { useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaHeartbeat,
  FaBrain,
  FaUserMd,
  FaChild,
} from "react-icons/fa";

function FindDoctor() {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDoctors, setFilteredDoctors] = useState(Data);
  const [specialtyFilter, setSpecialtyFilter] = useState("");

  const specialtyIcons = {
    Cardiology: <FaHeartbeat />,
    Dermatology: <FaUserMd />,
    Neurology: <FaBrain />,
    Pediatrics: <FaChild />,
  };

  useEffect(() => {
    let results = Data.filter(
      (doc) =>
        doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.specialty.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (specialtyFilter) {
      results = results.filter(
        (doc) => doc.specialty.toLowerCase() === specialtyFilter.toLowerCase()
      );
    }

    setFilteredDoctors(results);
  }, [searchTerm, specialtyFilter]);

  return (
    <div className="flex h-screen bg-[#d5defd]">
      <Sidebar
        cardConfigs={[
          {
            id: 1,
            bg: "bg-[#1f7a8c] dark:bg-[#485666]",
            border: "border-[#e1e5f2] dark:border-[#fff]",
          },
          {
            id: 2,
            bg: "bg-[#e1e5f2] dark:bg-[#fff]",
            border: "border-[#1f7a8c] dark:border-[#485666]",
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

      <div
        className="w-[70%] bg-[#1f7a8c] 
  dark:bg-[#0B0B45]
  p-10 text-white overflow-y-auto h-screen"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-bold mb-2">Find Your Doctor.</h1>
          <h2 className="text-4xl mb-8 font-semibold ">Book With Ease</h2>
          <div className="relative bg-[#e1e5f2] w-3/4 mb-6 rounded-xl">
            <FaSearch className="absolute top-1/2 left-4 transform -translate-y-1/2 text-black" />
            <input
              type="text"
              placeholder="Search by doctor name or specialty..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl text-black focus:outline-none shadow-md"
            />
          </div>
          <div className="flex flex-col mb-8 w-3/4">
            <label className="text-sm mb-1 text-[#e1e5f2]">Filter by:</label>
            <select
              value={specialtyFilter}
              onChange={(e) => setSpecialtyFilter(e.target.value)}
              className="w-full p-3 bg-[#e1e5f2] rounded-lg text-black shadow-md focus:outline-none"
            >
              <option value="">All Specialties</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Dermatology">Dermatology</option>
              <option value="Pediatrics">Pediatrics</option>
              <option value="Neurology">Neurology</option>
              <option value="General Medicine">General Medicine</option>
            </select>
          </div>
          <p className="text-sm text-[#bfdbf7] mb-4">
            Showing {filteredDoctors.length} result
            {filteredDoctors.length !== 1 ? "s" : ""}{" "}
            {specialtyFilter && `for “${specialtyFilter}”`}
          </p>

          <div className="space-y-4 w-3/4">
            {filteredDoctors.length > 0 ? (
              filteredDoctors.map((doc) => (
                <div
                  key={doc.id}
                  className="flex items-center justify-between bg-[#e1e5f2] text-black p-4 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={doc.photo}
                      className="w-14 h-14 rounded-full object-cover"
                      alt={doc.name}
                    />
                    <div>
                      <h3 className="font-semibold text-lg">{doc.name}</h3>
                      <p className="text-sm text-[#1f7a8c] dark:text-[#485666] flex items-center gap-1">
                        {specialtyIcons[doc.specialty]} {doc.specialty}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => navigate(`/doctor/${doc.id}`)}
                    className="bg-[#1f7a8c] dark:bg-[#485666] text-white px-4 py-2 rounded-lg hover:bg-[#022b3a] transition"
                  >
                    View
                  </button>
                </div>
              ))
            ) : (
              <p className="text-[#e1e5f2]">No doctors found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FindDoctor;
