import MainSpinner from "./components/MainSpinner";

function Loading() {
  return (
    <div className="h-[calc(100vh-64px)] fixed w-full flex justify-center items-center">
      <MainSpinner />
    </div>
  );
}

export default Loading;
