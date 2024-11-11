import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link, useParams } from "react-router-dom";

export function Post() {
  const { id } = useParams();

  return (
    <div className="grid place-items-center mt-5">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Post {id}</CardTitle>
            <Link to="/home" className="text-sm underline">
              Back to home
            </Link>
          </div>
          <CardDescription>Author Anthony Ribeiro</CardDescription>
        </CardHeader>

        <CardContent>Post details {id}</CardContent>
      </Card>
    </div>
  );
}
