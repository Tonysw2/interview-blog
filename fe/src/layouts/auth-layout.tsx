import { Outlet } from "react-router-dom";

export function AuthLayout() {
  return (
    <div className="grid place-items-center h-screen w-full p-4 overflow-auto">
      <Outlet />
    </div>
  );
}
