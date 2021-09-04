import React from "react";
import { Link } from "react-router-dom";

interface Props {
  current: string;
}

const Navbar: React.FC<Props> = ({ current }) => {
  return (
    <div className="w-full flex items-center justify-evenly shadow-md py-6 sticky top-0 z-50 bg-white">
      <Link
        className={`text-lg cursor-pointer ${current == "cnn" ? "font-bold" : "font-normal"}`}
        to="/"
      >
        CNN
      </Link>
      <Link
        className={`text-lg cursor-pointer ${current == "cnbc" ? "font-bold" : "font-normal"}`}
        to="/cnbc"
      >
        CNBC
      </Link>
      <Link
        className={`text-lg cursor-pointer ${current == "tempo" ? "font-bold" : "font-normal"}`}
        to="/tempo"
      >
        Tempo News
      </Link>
      <Link
        className={`text-lg cursor-pointer ${current == "antara" ? "font-bold" : "font-normal"}`}
        to="/antara"
      >
        Antara News
      </Link>
      <Link
        className={`text-lg cursor-pointer ${current == "tribun" ? "font-bold" : "font-normal"}`}
        to="/tribun"
      >
        Tribun News
      </Link>
    </div>
  );
};

export default Navbar;
