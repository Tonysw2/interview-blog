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
import { Textarea } from "@/components/ui/textarea";
import { ToastAction } from "@/components/ui/toast";
import { toast } from "@/hooks/use-toast";
import { sleep } from "@/utils/sleep";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const createPostSchema = z.object({
  title: z.string().min(1, "Title must have at least one character."),
  content: z.string().min(1, "Content must have at least one character."),
});

type CreatePostSchema = z.infer<typeof createPostSchema>;

export function CreatePost() {
  const form = useForm<CreatePostSchema>({
    resolver: zodResolver(createPostSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const handleSubmit = () =>
    form.handleSubmit(async (data) => {
      try {
        await sleep(Math.random() * 3000);

        toast({
          title: "Congrats!",
          description: "Your post has been created!",
        });
        console.log(data);
      } catch {
        toast({
          title: "Ops!",
          description: "Something went wrong while creating your post.",
          action: (
            <ToastAction altText="Try again" onClick={handleSubmit()}>
              Try again
            </ToastAction>
          ),
          variant: "destructive",
        });
      }
    });

  return (
    <div className="">
      <Card className="mx-auto w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Create Post</CardTitle>
          <CardDescription>
            Fill the form below to create your post.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form className="grid gap-4" onSubmit={handleSubmit()}>
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem className="grid gap-2">
                    <FormLabel htmlFor="title">Title</FormLabel>
                    <FormControl>
                      <Input
                        id="title"
                        type="title"
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
                name="content"
                render={({ field }) => (
                  <FormItem className="grid gap-2">
                    <FormLabel htmlFor="content">Content</FormLabel>
                    <FormControl>
                      <Textarea id="content" {...field} />
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
                  <Loader2 className="animate-spin size-4" />
                ) : (
                  <span>Create</span>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
