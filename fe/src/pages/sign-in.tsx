import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useId } from "react";
import { Link, useNavigate } from "react-router-dom";

export function SignIn() {
  const formId = useId();
  const navigate = useNavigate();

  function handleSubmit() {
    navigate("/home");
  }

  return (
    <div className="grid place-items-center h-screen w-full">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Sign In</CardTitle>
        </CardHeader>

        <CardContent>
          <form
            id={formId}
            className="flex flex-col gap-4"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-2">
              <Label>Email</Label>
              <Input type="text" />
            </div>

            <div className="flex flex-col gap-2">
              <Label>Password</Label>
              <Input type="password" />
            </div>
          </form>
        </CardContent>

        <CardFooter>
          <div className="flex flex-col gap-2 w-full items-center">
            <Button type="submit" form={formId} className="w-full">
              Sign in
            </Button>

            <p className="text-sm">
              Do not have an account?{" "}
              <Link to="/sign-up" className="underline">
                sign up here.
              </Link>
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
