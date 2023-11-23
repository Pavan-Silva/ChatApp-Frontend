import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg";

function Navbar() {
  return (
    <div className="flex w-full justify-center mt-3">
      <div className="navbar bg-base-100 px-6 max-w-7xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-white bg-base-200" : ""
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-white bg-base-200" : ""
                  }
                  to="https://github.com/Pavan-Silva/ChatApp-Frontend"
                >
                  Project
                </NavLink>
              </li>

              <li>
                <a>Resources</a>

                <ul className="p-2">
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "text-white bg-base-200" : ""
                      }
                      to="https://github.com/Pavan-Silva/ChatApp-Frontend"
                    >
                      GitHub Repository
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "text-white bg-base-200" : ""
                      }
                      to="https://github.com/Pavan-Silva/ChatApp-Frontend"
                    >
                      Documentation
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-white bg-base-200" : ""
                  }
                  to="https://github.com/Pavan-Silva/ChatApp-Frontend"
                >
                  Safety
                </NavLink>
              </li>
            </ul>
          </div>

          <img src={Logo} alt="Logo" />

          <a className="btn btn-ghost text-3xl text-white">BasicAI</a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base [&_a:hover]:text-white">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-white bg-base-200" : ""
                }
                to="/"
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-white bg-base-200" : ""
                }
                to="https://github.com/Pavan-Silva/ChatApp-Frontend"
              >
                Project
              </NavLink>
            </li>

            <li tabIndex={0}>
              <details>
                <summary className="hover:text-white">Resources</summary>

                <ul className="p-2">
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "text-white bg-base-200" : ""
                      }
                      to="https://github.com/Pavan-Silva/ChatApp-Frontend"
                    >
                      GitHub Repository
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "text-white bg-base-200" : ""
                      }
                      to="https://github.com/Pavan-Silva/ChatApp-Frontend"
                    >
                      Documentation
                    </NavLink>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-white bg-base-200" : ""
                }
                to="https://github.com/Pavan-Silva/ChatApp-Frontend"
              >
                Safety
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <Link to="/" className="btn text-white hover:text-dark-orange">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
              />
            </svg>
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
