import MainSpinner from "./components/MainSpinner";

function Loading() {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <MainSpinner />
    </div>
  );
}

export default Loading;
