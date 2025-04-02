import { format } from "date-fns";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Post } from "../../lib/model/post";
import ButtonRemove from "../button-remove";
import { Separator } from "@/components/ui/separator";

function ArchivePostItem({ post }: { post: Post }) {
  return (
    <Card className="border-chetwode-blue-300 border-t bg-chetwode-blue-50">
      <CardHeader>
        <CardTitle className="text-3xl uppercase">{post.title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          {post.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col">
        <div className="text-justify">{post.content}</div>
      </CardContent>
      <Separator orientation="horizontal" className="bg-chetwode-blue-300" />
      <CardFooter className="flex justify-between items-center">
        <span className="text-sm text-muted-foreground">
          {format(post.archiveDate ?? "", "yyyy-MM-dd  HH:mm:ss")}
        </span>
        <ButtonRemove postId={post._id} />
      </CardFooter>
    </Card>
  );
}

export default ArchivePostItem;
