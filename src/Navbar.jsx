import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono"
      role="navigation"
    >
      <a href="/" className="pl-8">
        <img
          src="./icon.svg"
          alt="Logo"
          height="16"
          width="16"
          className="inline align-middle"
        />
        Tech Haven
      </a>
      <div className="px-4 cursor-pointer md:hidden">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </div>
      <div className="pr-8 md:block hidden">
        <Link to="/" className="p-4">
          Home
        </Link>
        <Link to="/product" className="p-4">
          Products
        </Link>
        <Link to="/cart" className="p-4">
          {" "}
          Cart{" "}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
