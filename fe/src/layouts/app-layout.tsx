import { Link, Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <div className="h-screen w-full">
      <div className="max-w-7xl w-full mx-auto">
        <header className="w-full border-b p-5">
          <nav className="w-full flex items-center justify-center gap-2">
            <Link
              to="/home"
              className="bg-zinc-950 text-zinc-100 rounded px-3 py-1.5"
            >
              Posts
            </Link>
            <Link
              to="/post/create"
              className="bg-zinc-950 text-zinc-100 rounded px-3 py-1.5"
            >
              Create post
            </Link>
          </nav>
        </header>

        <Outlet />
      </div>
    </div>
  );
}
