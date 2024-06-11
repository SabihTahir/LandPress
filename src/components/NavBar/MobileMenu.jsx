import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const MobileMenu = () => {
  const [changeIcon, setChangeIcon] = useState("fa-bars");
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setChangeIcon(!changeIcon);
    setShowMenu(!showMenu);
  };
  return (
    <>
      <section className="md:hidden block sticky top-0 shadow-sm py-3 bg-white z-50">
        <nav className="max-w-6xl mx-auto lg:px-0 px-2">
          <div className="flex items-center justify-between pb-4">
            <div className="text-2xl font-semibold">
              <Link to="/">LandPress</Link>
            </div>
            <div className="text-2xl" onClick={handleMenu}>
              <i className={`fa ${changeIcon ? "fa-bars" : "fa-times"} `}></i>
            </div>
          </div>
          <div className={`${showMenu ? "flex" : "hidden"} flex-col gap-4 h-screen border-t py-4`}>
            <ul className="flex flex-col gap-6">
              <li>
                <NavLink to="/about" className="text-md hover:text-green-500">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className="text-md hover:text-green-500"
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/pricing" className="text-md hover:text-green-500">
                  Pricing
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/insights"
                  className="text-md hover:text-green-500"
                >
                  Insights
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-md hover:text-green-500">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="flex flex-col items-start gap-3">
                    <button className="bg-green-500 text-white px-4 py-3 rounded hover:bg-blue-900">Book intro call</button>
                    <button className="bg-blue-900 text-white px-4 py-3 rounded hover:bg-green-500">Ready to talk?</button>
                </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default MobileMenu;
