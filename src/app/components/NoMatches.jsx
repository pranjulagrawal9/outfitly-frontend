import { Button } from "./ui/button";

function NoMatches({ clearAll }) {
  return (
    <div className="hidden lg:flex justify-center items-center w-[calc(100vw-295px)] h-[calc(100vh-137px)]">
      <div className="flex flex-col items-center gap-5">
        <h2 className="text-2xl">Sorry, We couldn’t Find any matches!</h2>
        <Button
          className="text-xl border-[#2a55e5] text-[#2a55e5]"
          variant="outline"
          onClick={() => clearAll()}
        >
          Clear Filters
        </Button>
      </div>
    </div>
  );
}

export default NoMatches;
