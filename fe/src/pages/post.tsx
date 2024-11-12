import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { posts } from "@/constants/posts";
import { useState } from "react";
import { useParams } from "react-router-dom";

export function Post() {
  const { id } = useParams();
  const [post] = useState(posts.find((post) => post.id === id));

  return (
    <div className="grid grid-cols-1 gap-4 ">
      {post ? (
        <Card>
          <CardHeader>
            <CardTitle>{post.title}</CardTitle>
            <CardDescription>By {post.author.name}</CardDescription>
          </CardHeader>
          <CardContent>{post.content}</CardContent>
        </Card>
      ) : (
        <h1>This post were not found.</h1>
      )}
    </div>
  );
}
