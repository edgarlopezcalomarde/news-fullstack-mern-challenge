import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Post } from "../../lib/model/post";
import ButtonArchive from "../button-archive";

function NewPostItem({ post }: { post: Post }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
        <CardDescription>{post.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col">
        <div>{post.content}</div>
        <ButtonArchive postId={post._id} />
      </CardContent>
    </Card>
  );
}

export default NewPostItem;
