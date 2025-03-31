import { useState } from "react";
import ArchiveNewsItem from "./components/archive-news-item";
import NewNewsItem from "./components/new-news-item";
import NewsList from "./components/news-list";
import { useFindAllPost } from "./lib/api/use-find-all-post";
import { Button } from "@/components/ui/button";
import { PostType } from "./lib/model/post-type";

function NewsPage() {
  const [type, setType] = useState<PostType | undefined>(undefined);
  const { data } = useFindAllPost({
    type,
  });

  return (
    <div className="h-screen w-full bg-white flex flex-col p-4">
      <div className="p-4 flex justify-between ">
        <div>
          <Button onClick={() => setType("archived")}>Archive</Button>
          <Button onClick={() => setType("new")}>New</Button>
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
