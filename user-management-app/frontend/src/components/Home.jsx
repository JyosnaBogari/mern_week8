import { bodyText, headingClass, mutedText } from "../styles/common";
import { FaUserCircle } from "react-icons/fa";

function Home() {
  return (
    <div className="max-w-3xl mx-auto text-center mt-10">
      
      {/* Product App title */}
      <h1 className={headingClass}>
        Welcome to User Management App!
      </h1>
      
      {/* Description of an App */}
      <p className={`${bodyText} mt-4`}>
        This application allows you to manage users easily.
        You can register, view users, and manage user data
        through a clean and simple interface.
      </p>

      {/* User Logo */}
      <div className="flex justify-center my-6">
        <FaUserCircle className="text-9xl text-blue-500" />
      </div>

      {/* Tech Stack */}
      <p className={`${mutedText}`}>
        Built with React, Tailwind CSS, and modern web technologies.
      </p>

    </div>
  );
}

export default Home;