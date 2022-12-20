import React, { useState } from "react";
import { Link } from "react-scroll";
import Button from "./Button";
import Progress from "./Progress";
import { motion } from "framer-motion";
import Header from "./Header";

const links = [
  { name: "Home", link: "home" },
  { name: "About Us", link: "about" },
  { name: "Events", link: "events" },
  { name: "Sponsors", link: "sponsors" },
  { name: "SnT @IITI", link: "" },
  { name: "Tech Exihibits", link: "" },
];

function Navbar() {
  const registerHandler = () => {
    console.log("C");
    alert("Clicked");
  };
  const [open, setOpen] = useState(false);
  return (
    <>
      <Progress></Progress>
      <div className="fixed w-full top-0 colo opacity-100 z-50">
        <div className="flex items-center justify-between colo py-4 md:px-10 px-7">
          <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800">
            <span className="text-3xl text-cyan-900 mr-1">
              <div
                onClick={() => setOpen(!open)}
                className="text-3xl absolute right-8 top-10 cursor-pointer md:hidden z-50"
              >
                <ion-icon
                  name={open ? "close" : "menu-outline"}
                  style={{ color: "white" }}
                ></ion-icon>
              </div>
            </span>
          </div>

          <motion.ul
            className={`md:flex md:bg-transparent lg:bg-transparent sm:bg-[#111b53]  xsm:bg-[#111b53]  xxsm:bg-[#111b53] md:items-center md:pb-0 pb-12 absolute md:static z-[999] colo md:z-50 z-50 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-200 ease-in ${
              open ? "top-[100px]" : "top-[-500px]"
            } z-5`}
          >
            {links.map((link) => (
              <li
                className="md:ml-8 text-xl md:my-0 my-7 hover:cursor-pointer"
                key={link.name}
              >
                <Link
                  className="text-[#CAC0B3] hover:text-gray-400 duration-500 font-robotoCondensed "
                  to={link.link}
                  smooth={true}
                  duration={1000}
                  style={{
                    fontFamily: ["JetBrains Mono", "monospace"],
                    fontSize: "20px",
                    lineHeight: "1.5",
                  }}
                >
                  {" "}
                  {link.name}
                </Link>
              </li>
            ))}

            <div onClick={registerHandler} className="ml-5">
              <Button value={`Register`}></Button>
            </div>
          </motion.ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
