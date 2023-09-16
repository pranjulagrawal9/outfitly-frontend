import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }) {
  return (
    <div
      className={cn(
        "animate-pulse duration-1200 bg-gray-200 rounded-md",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
