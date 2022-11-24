import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/auth/userSlice";
export default function Navbar() {
  const { userInfo } = useSelector((s) => s.user);
  const dispatch = useDispatch();
  return (
    <div className=" z-50 bg-black shadow-xl w-screen h-[50px]  duration-300 absolute top-0 flex items-center justify-between px-[32px]">
      <a href="/">
        <h1 className="font-bold text-white cursor-pointer">FlexCart</h1>
      </a>
      <div className="flex gap-[24px]">
        {userInfo ? (
          <>
            <a href="/settings">
              <h1 className="font-normal text-white cursor-pointer hover:underline">
                Settings
              </h1>
            </a>
            <a
              href="/"
              onClick={() => {
                dispatch(logout());
                window.location.reload(true);
              }}
            >
              <h1 className="font-normal text-white cursor-pointer hover:underline">
                Déconnexion
              </h1>
            </a>
          </>
        ) : (
          <>
            <a href="/login">
              <h1 className="font-normal text-white cursor-pointer hover:underline">
                Login
              </h1>
            </a>
            <a href="/register">
              <h1 className="font-normal text-white cursor-pointer hover:underline">
                Register
              </h1>
            </a>
          </>
        )}
      </div>
    </div>
  );
}
