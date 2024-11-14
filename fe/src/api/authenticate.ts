import { api } from "@/lib/api";

type AuthenticateRequest = {
  email: string;
  password: string;
};

type AuthenticateResponse = {
  token: string;
};

export async function authenticate({ email, password }: AuthenticateRequest) {
  const response = await api.post<AuthenticateResponse>("/authenticate", {
    email,
    password,
  });

  return response.data;
}
