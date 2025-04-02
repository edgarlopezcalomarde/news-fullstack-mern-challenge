import { cn } from "@/lib/utils";

function Loading({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex-col gap-4 w-full flex items-center justify-center",
        className
      )}
    >
      <div className="w-28 h-28 border-8 text-blue-400 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-blue-400 rounded-full" />
    </div>
  );
}

export default Loading;
