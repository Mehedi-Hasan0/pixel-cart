import { Skeleton } from "../ui/skeleton";

const ShoppingMenuProductLoader = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <Skeleton className="w-20 h-3 rounded-md border" />
        <Skeleton className="rounded-lg w-[200px] 2xl:w-[250px] h-[200px] border" />
      </div>
      <div className="flex flex-col items-center gap-4">
        <Skeleton className="w-20 h-3 rounded-md border" />
        <Skeleton className="rounded-lg w-[200px] 2xl:w-[250px] h-[200px] border" />
      </div>
      <div className="flex flex-col items-center gap-4">
        <Skeleton className="w-20 h-3 rounded-md border" />
        <Skeleton className="rounded-lg w-[200px] 2xl:w-[250px] h-[200px] border" />
      </div>
      <div className="flex flex-col items-center gap-4">
        <Skeleton className="w-20 h-3 rounded-md border" />
        <Skeleton className="rounded-lg w-[200px] 2xl:w-[250px] h-[200px] border" />
      </div>
    </>
  );
};

export default ShoppingMenuProductLoader;
