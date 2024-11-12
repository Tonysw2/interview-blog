import { cn } from "@/lib/utils";
import { Menu, Package2 } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { AccountMenu } from "./account-menu";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { ToggleTheme } from "./theme/toggle-theme";

const routes = [
  {
    path: "/home",
    label: (
      <>
        <Package2 className="h-6 w-6" />
        <span className="sr-only">Acme Inc</span>
      </>
    ),
  },
  {
    path: "/home",
    label: "Posts",
  },
  {
    path: "/my-posts",
    label: "My Posts",
  },
  {
    path: "/create-post",
    label: "Create Post",
  },
];

export function AppBar() {
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 z-10">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        {routes.map((route, i) => (
          <Link
            key={`${route.path}-${i}`}
            to={route.path}
            className={cn(
              "text-muted-foreground hover:text-foreground",
              pathname === route.path ? "text-foreground" : ""
            )}
          >
            {route.label}
          </Link>
        ))}
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            {routes.map((route, i) => (
              <Link
                key={`${route.path}-${i}`}
                to={route.path}
                className={cn(
                  "text-muted-foreground hover:text-foreground",
                  pathname === route.path ? "text-foreground" : ""
                )}
              >
                {route.label}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>

      <div className="flex gap-2 ml-auto">
        <ToggleTheme />
        <AccountMenu />
      </div>
    </header>
  );
}
