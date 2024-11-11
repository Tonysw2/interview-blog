import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Home() {
  const [posts] = useState([
    {
      id: 1,
      title: "Title 1",
      body: "Content 1",
    },
    {
      id: 2,
      title: "Title 2",
      body: "Content 2",
    },
    {
      id: 3,
      title: "Title 3",
      body: "Content 3",
    },
    {
      id: 4,
      title: "Title 4",
      body: "Content 4",
    },
  ]);

  return (
    <div>
      <h1 className="text-2xl mb-5 text-center mt-5">Posts</h1>

      <div className="grid grid-cols-2 gap-3">
        {posts.map((post) => (
          <Link to={`/post/${post.id}`}>
            <Card>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
