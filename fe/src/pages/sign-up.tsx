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
import { Link } from "react-router-dom";

export function SignUp() {
  const formId = useId();

  return (
    <div className="grid place-items-center h-screen w-full">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
        </CardHeader>

        <CardContent>
          <form id={formId} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label>Name</Label>
              <Input type="text" />
            </div>

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
          <div className="flex flex-col gap-2 items-center w-full">
            <Button type="submit" form={formId} className="w-full">
              Sign up
            </Button>

            <p className="text-sm">
              Already have an account?{" "}
              <Link to="/sign-in" className="underline">
                sign in here.
              </Link>
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
