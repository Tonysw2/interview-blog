import { authenticate } from "@/api/authenticate";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { storageKeys } from "@/config/storage-keys";
import { toast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";

const signInSchema = z.object({
  email: z.string().email("It must be a valid email."),
  password: z.string().min(8, "The password must have at least 8 characters."),
});

type SignInSchema = z.infer<typeof signInSchema>;

export function SignIn() {
  const navigate = useNavigate();
  const form = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = () =>
    form.handleSubmit(async ({ email, password }) => {
      try {
        const { token } = await authenticate({ email, password });

        localStorage.setItem(storageKeys.token, token);

        navigate("/home");
      } catch (error) {
        const isAxiosError = error instanceof AxiosError;

        const message =
          isAxiosError && error.response
            ? error.response.data.error
            : "Something went wrong on sign in.";

        toast({
          description: message,
        });
      }
    });

  return (
    <Card className="mx-auto w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form className="grid gap-4" onSubmit={handleSubmit()}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="grid gap-2">
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <FormControl>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="grid gap-2">
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <FormControl>
                    <Input
                      id="password"
                      type="password"
                      placeholder="********"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? (
                <Loader2 className="size-4 animate-spin" />
              ) : (
                <span>Login</span>
              )}
            </Button>
          </form>
        </Form>

        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Button asChild variant="link" className="inline p-0">
            <Link to="/sign-up">Sign up</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
