import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HeaderLink } from "./header-link";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenuOpen = () => {
    setOpenMenu(!openMenu);
  };
  const closeMenu = () => {
    setOpenMenu(false);
  };

  return (
    <div className="navbar sticky top-0 z-30 bg-rose-700/70 text-white">
      <div className="flex-1 self-start">
        <a className="btn btn-ghost text-xl normal-case" href="#">
          Portfolio
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-vertical p-0 sm:menu-horizontal">
          <li className="ml-auto block sm:hidden">
            <button
              // eslint-disable-next-line tailwindcss/no-contradicting-classname
              className="text-center hover:bg-transparent focus:bg-transparent active:bg-transparent active:bg-red-200/20"
              onClick={() => handleMenuOpen()}
            >
              <FontAwesomeIcon
                icon={openMenu ? faXmark : faBars}
                height="1em"
                className="inline-block"
              />
            </button>
          </li>
          <HeaderLink
            label="Profile"
            href="#profile"
            openMenu={openMenu}
            onClick={closeMenu}
          />
          <HeaderLink
            label="Software"
            href="#software"
            openMenu={openMenu}
            onClick={closeMenu}
          />
          <HeaderLink
            label="Works"
            href="#works"
            openMenu={openMenu}
            onClick={closeMenu}
          />
          <HeaderLink
            label="Certification"
            href="#certification"
            openMenu={openMenu}
            onClick={closeMenu}
          />
        </ul>
      </div>
    </div>
  );
};
