import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Post } from "../model/post";
import { useToast } from "@/lib/hooks/use-toast";
import { apiNews } from "@/lib/api/news";

export function useArchivePost() {
  const { onError } = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["archive", "post"],
    mutationFn: async ({ postId }: { postId: string }) => {
      const { data } = await apiNews.patch<{ data: Post }>(
        "/news/archive/" + postId
      );

      return data.data;
    },
    onError,
    onSettled: (data, err) => {
      if (!err && data) {
        queryClient.setQueryData(
          ["find", "all", "post", "new"],
          (oldData: Array<Post>) =>
            oldData.filter((itm) => itm._id !== data._id)
        );
      }
    },
  });
}
