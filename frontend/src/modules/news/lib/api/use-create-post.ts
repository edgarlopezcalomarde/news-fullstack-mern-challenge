import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Post } from "../model/post";
import { useToast } from "@/lib/hooks/use-toast";
import { apiNews } from "@/lib/api/news";
import { CreatePostSchema } from "../../components/dialog-create-post";
import { useViewType } from "../store/view-type";

export function useCreatePost() {
  const { setType } = useViewType();
  const { onError } = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["create", "post"],
    mutationFn: async (payload: CreatePostSchema) => {
      const { data } = await apiNews.post<{ data: Post }>("/post", payload);
      return data.data;
    },
    onError,
    onSettled: (data, err) => {
      if (!err && data) {
        queryClient.invalidateQueries({
          queryKey: ["find", "all", "post", "new"],
        });
        setType("new");
      }
    },
  });
}
