import { HeaderLink } from "./header-link";

export const Header = () => {
  return (
    <div className="navbar sticky top-0 z-30 bg-red-900/90">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl normal-case" href="#">
          Portfolio
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <HeaderLink label="Profile" href="#profile" />
          <HeaderLink label="Software" href="#software" />
          <HeaderLink label="Works" href="#works" />
        </ul>
      </div>
    </div>
  );
};
