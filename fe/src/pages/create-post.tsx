import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useId } from "react";

export function CreatePost() {
  const formId = useId();

  return (
    <div className="grid place-items-center mt-5">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Create a post</CardTitle>
          <CardDescription>Fill the form with post details</CardDescription>
        </CardHeader>
        <CardContent>
          <form id={formId}>
            <Input type="text" placeholder="Title" />
            <Input type="text" placeholder="Body" />
          </form>
        </CardContent>

        <CardFooter>
          <Button type="submit" form={formId}>
            Create Post
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
