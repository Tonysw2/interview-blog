import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./components/theme/theme-provider";

import { router } from "./routes";
import { Toaster } from "./components/ui/toaster";

export function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <RouterProvider router={router} />
      <Toaster />
    </ThemeProvider>
  );
}
