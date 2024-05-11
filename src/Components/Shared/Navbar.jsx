import { Link, NavLink } from 'react-router-dom';
import '../../Components/Shared/Navbar.css';
import logo from '../../assets/logo.png';
import logo2 from '../../assets/logo2.png';

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/queries">Queries</NavLink>
      </li>
      <li>
        <NavLink to="/recommendations">Recommendations For Me</NavLink>
      </li>
      <li>
        <NavLink to="/myqueries">My Queries</NavLink>
      </li>
      <li>
        <NavLink to="/myrecommendations">My Recommendations</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="max-w-7xl  mx-auto px-6 py-2 border-b">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                {navLinks}
              </ul>
            </div>
            <Link>
              <a className="btn btn-ghost text-xl flex items-center justify-center gap-3">
                <img className="max-w-[30px]" src={logo2} alt="" />
                <span>Alt-Forum</span>
              </a>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navLinks}</ul>
          </div>
          <div className="navbar-end">
            <div className="avatar online">
              <div className="w-[40px] rounded-full">
                <img className="w-full" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
