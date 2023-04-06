import React from "react";

const SideNav = () => {
  return (
    <aside>
      <button className="btn btn-success text-emerald-800 w-44 h-14 rounded-full">
        Compose
      </button>
      <ul className="mt-5">
        <li>
          <a href="" className="block px-2 py-1 bg-slate-300 rounded-lg">
            Inbox
          </a>
        </li>
        <li>
          <a href="" className="block px-2 py-1 hover:bg-slate-300 rounded-lg">
            Starred
          </a>
        </li>
        <li>
          <a href="" className="block px-2 py-1 hover:bg-slate-300 rounded-lg">
            Snoozed
          </a>
        </li>
        <li>
          <a href="" className="block px-2 py-1 hover:bg-slate-300 rounded-lg">
            Sent
          </a>
        </li>
        <li>
          <a href="" className="block px-2 py-1 hover:bg-slate-300 rounded-lg">
            More
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default SideNav;
