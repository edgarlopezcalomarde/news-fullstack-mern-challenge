import { Post } from "../model/post";
import { apiNews } from "@/lib/api/news";
import { useSuspenseQuery } from "@tanstack/react-query";
import { PostType } from "../model/post-type";

interface FindAllPostProps {
  orderField?: string;
  sortOrder?: "asc" | "desc";
  type?: PostType;
}

export function useFindAllPost({
  orderField = "storageDate",
  sortOrder = "desc",
  type = "new",
}: FindAllPostProps) {
  return useSuspenseQuery({
    queryKey: ["find", "all", "post", orderField, sortOrder, type],
    queryFn: async () => {
      const params = new URLSearchParams();
      params.append("orderField", orderField);
      params.append("sortOrder", sortOrder);
      params.append("type", type);

      const { data } = await apiNews.get<{ data: Array<Post> }>(
        "/news?=" + params.toString()
      );
      return data.data;
    },
  });
}
