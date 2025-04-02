import { Post } from "../model/post";
import { apiNews } from "@/lib/api/news";
import { useSuspenseQuery } from "@tanstack/react-query";
import { PostType } from "../model/post-type";

interface FindAllPostProps {
  field?: string;
  order?: "asc" | "desc";
  type?: PostType;
}

export function useFindAllPost({
  field = "storageDate",
  order = "desc",
  type = "new",
}: FindAllPostProps) {
  return useSuspenseQuery({
    queryKey: ["find", "all", "post", type, field, order],
    queryFn: async () => {
      const params = new URLSearchParams();
      params.append("field", field);
      params.append("type", type);
      params.append("order", order);

      const { data } = await apiNews.get<{ data: Array<Post> }>(
        "/post?" + params.toString()
      );
      return data.data;
    },
  });
}
