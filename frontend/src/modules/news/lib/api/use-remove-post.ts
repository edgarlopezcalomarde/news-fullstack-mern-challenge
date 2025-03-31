import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/lib/hooks/use-toast";
import { apiNews } from "@/lib/api/news";

export function useRemovePost() {
  const { onError } = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["remove", "post"],
    mutationFn: async ({ postId }: { postId: string }) => {
      await apiNews.delete("/post/" + postId);
      return postId;
    },
    onError,
    onSettled: (data, err) => {
      if (!err && data) {
        queryClient.invalidateQueries({
          queryKey: ["find", "all", "post", "archived"],
        });
      }
    },
  });
}
