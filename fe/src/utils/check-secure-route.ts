import { storageKeys } from "@/config/storage-keys";
import { redirect } from "react-router-dom";

export function checkSecureRoute() {
  const token = localStorage.getItem(storageKeys.token);

  if (!token) return redirect("/sign-in");

  return null;
}
