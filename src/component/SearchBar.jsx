import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className=" flex justify-center my-6">
      <div className="flex items-center w-3/4 md:w-2/3 lg:w-1/2 border-2 border-[#022b3a] rounded-lg overflow-hidden bg-white">
        <div className="p-3 text-[#022b3a]">
          <FaSearch size={20} />
        </div>

        <input
          type="text"
          placeholder="Search by doctor name or specialty..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow p-3 outline-none"
        />
      </div>
    </div>
  );
};

export default SearchBar;
