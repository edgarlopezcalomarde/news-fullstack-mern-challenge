import { Archive } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useArchivePost } from "../lib/api/use-archive-post";

function ButtonArchive({ postId }: { postId: string }) {
  const archive = useArchivePost();

  return (
    <Button onClick={handleArchive}>
      <Archive />
      Archive
    </Button>
  );

  function handleArchive() {
    archive.mutate({ postId });
  }
}

export default ButtonArchive;
