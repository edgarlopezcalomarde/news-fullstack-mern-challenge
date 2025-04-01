import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRemovePost } from "../lib/api/use-remove-post";

function ButtonRemove({ postId }: { postId: string }) {
  const removePost = useRemovePost();
  return (
    <Button variant="destructive" onClick={handleRemove}>
      <Trash /> Remove
    </Button>
  );

  function handleRemove() {
    removePost.mutate({ postId });
  }
}

export default ButtonRemove;
