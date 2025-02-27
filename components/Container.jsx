export default function Container({ children }) {
  return (
    <div className="flex w-screen ">
      <div className="max-w-[65rem]  w-[90%] flex flex-col mx-auto mt-5">
        {children}
      </div>
    </div>
  );
}
