import Header from "@/components/header";
import LoadingIcon from "@/components/loading-icon";

export default function Loading() {
  return (
    <>
      <Header />

      <main>
        <div className=" flex items-center justify-center h-screen">
          <LoadingIcon />
        </div>
      </main>
    </>
  );
}
