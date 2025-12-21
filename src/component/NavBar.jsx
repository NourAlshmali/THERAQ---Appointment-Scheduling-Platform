import { IoMdSunny, IoMdMoon } from "react-icons/io";

const Navbar = ({ mood, setMood }) => {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Doctors", link: "#find-doctor" },
    { name: "About us", link: "#AboutUs" },
    { name: "Contact", link: "#Contact" },
  ];

  return (
    <nav
      className="
    flex fixed justify-between items-center py-4 px-12 z-10
    bg-gradient-to-r from-[#1f7a8c] via-[#0c5766] to-[#022b3a]
    dark:bg-gradient-to-r dark:from-[#1D2545] dark:via-[#0B0B45] dark:to-[#04090F]
   
    shadow-lg w-full h-[80px]
  "
    >
      <div>
        <img src="/assets/img/logo.png" alt="logo" className="h-[120px]" />
      </div>
      <ul className="flex space-x-10 rtl:space-x-reverse">
        {navItems.map((item) => (
          <li key={item.name}>
            <a
              href={item.link}
              className="text-[#ffffff]  dark:text-[#fff] cursor-pointer relative hover:text-[#bfdbf7] text-2xl"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <span onClick={() => setMood((mood) => !mood)}>
        {mood ? (
          <IoMdSunny className="text-yellow-400 ml-[15px] text-[40px]" />
        ) : (
          <IoMdMoon className="text-white ml-[15px] text-[40px] dark:text-white transition-colors duration-300" />
        )}
      </span>
    </nav>
  );
};

export default Navbar;
