import { FaHome } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { MdRestaurantMenu } from "react-icons/md";
import { useState } from "react";
function Navber() {
  const [velu, setVelu] = useState(true);
  return (
    <>
      <nav className="w-11/12 mx-auto items-center py-3 font-semibold flex justify-between">
        <h1 className="text-3xl">
          <FaHome />
        </h1>
        <ul className="hidden sm:flex gap-8">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Menu</li>
        </ul>
        {velu ? (
          <h1
            onClick={() => setVelu(!velu)}
            className="block sm:hidden text-2xl"
          >
            <TiThMenu />
          </h1>
        ) : (
          <h1
            onClick={() => setVelu(!velu)}
            className="block sm:hidden text-2xl"
          >
            <MdRestaurantMenu />
          </h1>
        )}

        <ul
          className={`absolute z-20 right-0 top-[54px] px-3 duration-300 ${
            velu ? "scale-0" : "scale-100"
          } sm:scale-0 bg-emerald-300 py-2 flex flex-col gap-8`}
        >
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Menu</li>
        </ul>
      </nav>
    </>
  );
}

export default Navber;
