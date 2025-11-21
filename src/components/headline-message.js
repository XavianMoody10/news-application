export default function HeadlineMessage({ message }) {
  return (
    <>
      {message && (
        <div className=" h-screen flex items-center justify-center text-2xl font-bold">
          {message}
        </div>
      )}
    </>
  );
}
