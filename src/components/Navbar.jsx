import { useEffect, useState } from "react";
import Logo from "../assets/Logo.png";
import { FaLinkedin, FaGithub, FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Set dark mode on mount based on preference or existing class
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    // const newMode = !isDarkMode;
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-14" src={Logo} alt="Logo" />
      </div>
      <div className="bg-white text-black dark:bg-black dark:text-white p-4">
        This adapts to dark mode!
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/mohd-farhan0678"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Dev-Farhan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

        {/* Theme Toggle Icon */}
        <button onClick={toggleTheme}>
          {isDarkMode ? <FaMoon /> : <FaSun />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
