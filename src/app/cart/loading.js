import { Skeleton } from "../components/ui/skeleton";

function CartLoading() {
  return (
    <div className="min-h-[calc(100vh-64px)]">
      <div className="px-5 mt-5 max-w-7xl mx-auto lg:mt-20">
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="flex flex-col gap-5 lg:w-3/5">
            <Skeleton className="h-20 w-full" />
            <Skeleton className="h-20 w-full" />
            <Skeleton className="h-20 w-full" />
          </div>

          <div className="lg:w-2/5 lg:border-2 h-fit">
            <div className="mb-24 lg:mb-0">
              <Skeleton className="w-full h-10" />
              <div className="px-5">
                <div className="flex justify-between py-5 border-b-2">
                  <Skeleton className="w-36 h-5" />
                  <Skeleton className="w-14 h-5" />
                </div>
                <div className="flex justify-between py-5 border-b-2">
                  <Skeleton className="w-36 h-5" />
                  <Skeleton className="w-14 h-5" />
                </div>
                <div className="flex justify-between py-5 border-b-2">
                  <Skeleton className="w-36 h-5" />
                  <Skeleton className="w-14 h-5" />
                </div>
                <div className="flex justify-between py-5 border-b-2">
                  <Skeleton className="w-36 h-5" />
                  <Skeleton className="w-14 h-5" />
                </div>
              </div>
            </div>

            <div className="flex fixed bottom-0 left-0 right-0 py-4 px-3 shadow-2xl bg-white lg:static lg:shadow-none">
              <div className="flex-1 flex flex-col justify-center">
                <Skeleton className="w-20 h-5 mb-3" />
                <Skeleton className="w-10 h-5" />
              </div>
              <Skeleton className="w-20 h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartLoading;
