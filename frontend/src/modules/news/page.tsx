import { Button } from "@/components/ui/button";
import { useViewType } from "./lib/store/view-type";
import ArchivePostItem from "./components/post/archive-post-item";
import NewPostItem from "./components/post/new-post-item";
import PostList from "./components/post/post-list";
import { Suspense } from "react";
import Loading from "@/components/loading";
import { DialogCreatePost } from "./components/dialog-create-post";

function NewsPage() {
  const { type, setType } = useViewType();

  return (
    <div className="h-screen w-full bg-white flex flex-col p-4 gap-6">
      <div className="flex justify-between ">
        <div className="border p-1 bg-chetwode-blue-50 border-chetwode-blue-400 rounded">
          <Button
            onClick={() => setType("new")}
            className="cursor-pointer"
            variant={type === "new" ? "primary" : "ghost"}
          >
            New
          </Button>
          <Button
            onClick={() => setType("archived")}
            className="cursor-pointer"
            variant={type === "archived" ? "primary" : "ghost"}
          >
            Archive
          </Button>
        </div>
        <DialogCreatePost />
      </div>
      <Suspense fallback={<Loading className="h-full w-full" />}>
        <PostList>
          {(data) =>
            data.map((itm) => {
              if (itm.archiveDate) {
                return <ArchivePostItem post={itm} key={itm._id} />;
              }
              return <NewPostItem post={itm} key={itm._id} />;
            })
          }
        </PostList>
      </Suspense>
    </div>
  );
}

export default NewsPage;
