import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { routes } from "../../constants";
import { MdLogout } from "react-icons/md";
import axios from "axios";
import toast from "react-hot-toast";

export default function Sidebar() {
  const navigate = useNavigate();
  const logout = async () => {
    try {
      await axios.get("/user/logout");
      navigate("/login");
      toast.success("Logout Successful");
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1 h-screen">
        <Link to="/dashboard" className="flex items-center pl-3 mb-14">
          {/* <div className="relative h-8 w-8 mr-4">
            <Image fill alt="Logo" src="/logo.png" />
          </div> */}
          <h1>Asset Management System</h1>
        </Link>
        <div className="space-y-1 mb-3 ">
          {routes.map((route) => (
            <Link
              key={route.href}
              to={route.href}
              className={`text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition`}
            >
              <div className="flex items-center flex-1">
                <div className={route.color}>
                  <route.icon className="h-5 w-5 mr-3" />
                </div>
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-auto border-t-2  px-3 space-y-1">
        <button
          onClick={logout}
          className="text-sm group flex p-3 mt-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition text-zinc-400 hover:no-underline"
        >
          <div className="flex items-center flex-1">
            <div className="">
              <MdLogout className="h-5 w-5 mr-3" />
            </div>
            Logout
          </div>
        </button>
      </div>
    </div>
  );
}
