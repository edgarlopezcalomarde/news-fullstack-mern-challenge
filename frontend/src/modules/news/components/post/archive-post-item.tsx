import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Post } from "../../lib/model/post";
import RemoveButton from "../remove-button";

function ArchivePostItem({ post }: { post: Post }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
        <CardDescription>{post.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col">
        <div>{post.content}</div>
        <RemoveButton postId={post._id} />
      </CardContent>
    </Card>
  );
}

export default ArchivePostItem;
