import { Outlet, NavLink } from "react-router-dom";
import { Timer, Scroll } from "phosphor-react";
import Icon from "../../public/Icon";

export function DefaultLayout() {
  return (
    <main className="w-full flex justify-center items-center h-screen overflow-hidden">
      <div className="max-w-6xl w-full antialiased  bg-[#202024] rounded-lg py-6 px-10 h-5/6">
        <nav className="w-full flex items-center justify-between">
          <NavLink
            to={"/"}
            className="hover:border-b-2 hover:border-emerald-700 border-b-2 border-transparent transition-transform"
          >
            <Icon className="fill-emerald-500" />
          </NavLink>
          <div className="flex gap-4">
            <NavLink
              to={"/"}
              className="hover:border-b-2 hover:border-emerald-700 border-b-2 border-transparent transition-transform group pb-1"
            >
              <Timer
                size={32}
                className="group-aria-[current=page]:text-emerald-500 transition-colors"
              />
            </NavLink>
            <NavLink
              to={"/History"}
              className="hover:border-b-2 hover:border-emerald-700 border-b-2 border-transparent transition-transform group"
            >
              <Scroll
                size={32}
                className="group-aria-[current=page]:text-emerald-500 transition-colors"
              />
            </NavLink>
          </div>
        </nav>
        <div className="w-full justify-center items-center">
          <Outlet />
        </div>
      </div>
    </main>
  );
}
