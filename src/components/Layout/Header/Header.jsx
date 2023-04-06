import React from "react";

const Header = () => {
  return (
    <header className="w-[99%] mx-auto">
      <div className="navbar p-0 gap-2">
        <div className="w-80">
          <a className="text-3xl font-bold">
            <span className="text-green-400">v</span>Gmail
          </a>
        </div>
        <div className="w-full justify-between items-center  gap-2">
          <div className="form-control">
            <input
              type="search"
              placeholder="Search Email"
              className="input input-bordered border-gray-200 bg-slate-200 w-[650px]"
            />
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://lh3.googleusercontent.com/ogw/AAEL6sgg2Pircnun24dLacqNyVCyU_tcKceA1Vb_MoOd=s32-c-mo" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li></li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Login Another Account</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
