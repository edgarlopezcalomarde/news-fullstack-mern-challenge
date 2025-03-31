import { Button } from "@/components/ui/button";
import { useArchivePost } from "../lib/api/use-archive-post";

function ArchiveButton({ postId }: { postId: string }) {
  const archive = useArchivePost();

  return <Button onClick={handleArchive}>Archive</Button>;

  function handleArchive() {
    archive.mutate({ postId });
  }
}

export default ArchiveButton;
