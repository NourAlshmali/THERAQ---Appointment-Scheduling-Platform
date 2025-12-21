import React from "react";
import {
  FaUserMd,
  FaSearch,
  FaCalendarAlt,
  FaCheckCircle,
} from "react-icons/fa";

const stepsData = [
  {
    id: 1,
    title: "Choose Your Speciality",
    description: "Find the right doctor based on your medical need.",
    Icon: FaUserMd,
  },
  {
    id: 2,
    title: "Refine Your Search",
    description: "Filter results by location, insurance, or rating.",
    Icon: FaSearch,
  },
  {
    id: 3,
    title: "Book an Appointment",
    description: "Select a convenient time slot and confirm online.",
    Icon: FaCalendarAlt,
  },
  {
    id: 4,
    title: "Visit Your Doctor",
    description: "Get world-class care and professional consultation.",
    Icon: FaCheckCircle,
  },
];

const Sidebar = ({ cardConfigs }) => {
  return (
    <div
      className="bg-[#F3F6FF] 
    text-gunmetal p-10 w-[30%] shadow-lg flex flex-col items-center justify-center h-full"
    >
      <h2 className="text-teal-main dark:text-[#0B0B45] text-[#0B0B45] text-3xl mb-7 pb-3 font-bold border-b-2 border-columbia-blue">
        How It Works - 4 Simple Steps
      </h2>
      <ul className="space-y-6">
        {stepsData.map((step) => {
          const config = cardConfigs.find((c) => c.id === step.id) || {};

          return (
            <li
              key={step.id}
              className={`flex items-start p-4 ${config.bg} border-l-4 ${config.border} rounded-lg  `}
            >
              <div
                className={`flex items-center justify-center dark:text-[#0B0B45] w-12 h-12 min-w-12 rounded-full ${config.iconBg} text-gunmetal mr-4`}
              >
                <step.Icon size={20} />
              </div>

              <div className="grow">
                <h3 className="text-lg dark:text-[#0B0B45] font-semibold mb-1 text-gunmetal">
                  {step.id + ". " + step.title}
                </h3>
                <p className="text-sm dark:text-[#0B0B45] text-gunmetal opacity-75">
                  {step.description}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
