import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { REQUIRED } from "@/lib/const";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import { useCreatePost } from "../lib/api/use-create-post";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { DatePicker } from "@/components/date-picker";

const createPostSchema = z.object({
  title: z.string({ required_error: REQUIRED }).min(1, { message: REQUIRED }),
  description: z
    .string({ required_error: REQUIRED })
    .min(1, { message: REQUIRED }),
  date: z.string(),
  content: z.string({ required_error: REQUIRED }).min(1, { message: REQUIRED }),
  author: z.string({ required_error: REQUIRED }).min(1, { message: REQUIRED }),
});

export type CreatePostSchema = z.infer<typeof createPostSchema>;

export function DialogCreatePost() {
  const [open, setOpen] = useState(false);

  const createPost = useCreatePost();

  const form = useForm({
    resolver: zodResolver(createPostSchema),
    defaultValues: {
      author: "",
      content: "",
      date: new Date().toISOString(),
      description: "",
      title: "",
    },
  });

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        form.reset();
        setOpen(v);
      }}
    >
      <DialogTrigger asChild>
        <Button className="cursor-pointer" variant="primary">
          Create
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create new post.</DialogTitle>
          <DialogDescription>Genereta new post for news app.</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <div className="flex justify-between gap-1">
                    <FormLabel>Title:</FormLabel>
                    <FormMessage />
                  </div>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <div className="flex justify-between gap-1">
                    <FormLabel>Description:</FormLabel>
                    <FormMessage />
                  </div>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <div className="flex justify-between gap-1">
                    <FormLabel>Date:</FormLabel>
                    <FormMessage />
                  </div>
                  <FormControl>
                    <DatePicker
                      onChange={(v) => field.onChange(v ? v.toISOString() : "")}
                      value={
                        field.value && !isNaN(Date.parse(field.value))
                          ? new Date(field.value)
                          : undefined
                      }
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <div className="flex justify-between gap-1">
                    <FormLabel>Content:</FormLabel>
                    <FormMessage />
                  </div>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="author"
              render={({ field }) => (
                <FormItem>
                  <div className="flex justify-between gap-1">
                    <FormLabel>Author:</FormLabel>
                    <FormMessage />
                  </div>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit" variant="primary" className="cursor-pointer">
              Create
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );

  function onSubmit(values: CreatePostSchema) {
    createPost.mutate(values);
    setOpen(false);
  }
}
