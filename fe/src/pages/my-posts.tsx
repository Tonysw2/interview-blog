import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { posts } from "@/constants/posts";
import { Book } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export function MyPosts() {
  const [postsState] = useState(posts.filter((post) => post.author.id === "1"));

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
      {postsState.map((post) => (
        <Link key={post.id} to={`/post/${post.id}`}>
          <Card x-chunk="A card showing the total revenue in USD and the percentage difference from last month.">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {post.author.name}
              </CardTitle>
              <Book className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{post.title}</div>
              <p className="text-xs text-muted-foreground truncate">
                {post.content}
              </p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
