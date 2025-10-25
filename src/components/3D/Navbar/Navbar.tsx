import Link from "next/link";

const Navbar = () => {
  return (
    <header className="header">
      <Link
        className="w-10 h-10 bg-white flex items-center justify-center font-bold shadow-md"
        href="/"
      >
        <p className="blue-gradient_text">AH</p>
      </Link>
    </header>
  );
};

export default Navbar;
