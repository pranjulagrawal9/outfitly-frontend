import { Skeleton } from "@/app/components/ui/skeleton";

export default function loading() {
  return (
    <div className="flex flex-col lg:flex-row mx-5 lg:mx-20 mt-5 lg:mt-10 gap-8">
      <div className="flex w-full lg:w-1/2 gap-3">
        <div className="flex w-1/5 flex-col gap-3">
          <Skeleton className="w-full h-12 lg:h-1/5" />
          <Skeleton className="w-full h-12 lg:h-1/5" />
          <Skeleton className="w-full h-12 lg:h-1/5" />
          <Skeleton className="w-full h-12 lg:h-1/5" />
          <Skeleton className="w-full h-12 lg:h-1/5" />
        </div>
        <Skeleton className="w-4/5" />
      </div>
      <div className="lg:w-1/2 flex flex-col gap-5">
        <Skeleton className="w-1/4 h-5" />
        <Skeleton className="w-3/5 h-5" />
        <Skeleton className="w-1/12 h-5" />
        <Skeleton className="w-1/12 h-5" />
        <Skeleton className="w-3/5 h-5" />
        <div className="flex gap-3">
          <Skeleton className="w-16 h-16" />
          <Skeleton className="w-16 h-16" />
          <Skeleton className="w-16 h-16" />
          <Skeleton className="w-16 h-16" />
          <Skeleton className="w-16 h-16" />
        </div>
        <div className="flex gap-5">
          <Skeleton className="w-1/2 h-12" />
          <Skeleton className="w-1/2 h-12" />
        </div>
        <Skeleton className="w-2/5 h-5" />
        <Skeleton className="w-full h-5" />
        <Skeleton className="w-full h-5" />
        <Skeleton className="w-full h-5" />
        <Skeleton className="w-full h-5" />
        <Skeleton className="w-full h-5" />
      </div>
    </div>
  );
}
