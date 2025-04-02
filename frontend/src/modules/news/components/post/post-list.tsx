import React from "react";
import { useFindAllPost } from "../../lib/api/use-find-all-post";
import { useViewType } from "../../lib/store/view-type";
import { Post } from "../../lib/model/post";

function PostList({
  children,
}: {
  children: (data: Array<Post>) => React.ReactNode;
}) {
  const { type } = useViewType();
  const { data } = useFindAllPost({
    type,
    field: type === "new" ? "storageDate" : "archiveDate",
  });
  return <div className="flex flex-col gap-4">{children(data)}</div>;
}

export default PostList;
