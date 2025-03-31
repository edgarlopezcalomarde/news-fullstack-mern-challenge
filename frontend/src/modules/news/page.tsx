import { useState } from "react";
import ArchiveNewsItem from "./components/archive-news-item";
import NewNewsItem from "./components/new-news-item";
import NewsList from "./components/news-list";
import { useFindAllPost } from "./lib/api/use-find-all-post";
import { Button } from "@/components/ui/button";
import { PostType } from "./lib/model/post-type";

function NewsPage() {
  const [type, setType] = useState<PostType | undefined>("new");
  const { data } = useFindAllPost({
    type,
  });

  return (
    <div className="h-screen w-full bg-white flex flex-col p-4 gap-6">
      <div className="flex justify-between ">
        <div className="border p-1 bg-gray-100 border-gray-400 rounded">
          <Button
            onClick={() => setType("new")}
            className="cursor-pointer"
            variant={type === "new" ? "default" : "ghost"}
          >
            New
          </Button>
          <Button
            onClick={() => setType("archived")}
            className="cursor-pointer"
            variant={type === "archived" ? "default" : "ghost"}
          >
            Archive
          </Button>
        </div>
        <Button>Create</Button>
      </div>
      <NewsList>
        {data.map((itm) => {
          if (itm.archiveDate) {
            return <ArchiveNewsItem post={itm} key={itm._id} />;
          }

          return <NewNewsItem post={itm} key={itm._id} />;
        })}
      </NewsList>
    </div>
  );
}

export default NewsPage;
