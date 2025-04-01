import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Post } from "../../lib/model/post";
import ButtonRemove from "../button-remove";

function ArchivePostItem({ post }: { post: Post }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
        <CardDescription>{post.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col">
        <div>{post.content}</div>
        <div>{(post.archiveDate ?? "").toString()}</div>
        <ButtonRemove postId={post._id} />
      </CardContent>
    </Card>
  );
}

export default ArchivePostItem;
