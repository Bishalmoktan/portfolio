const BioLoading = () => {
  return (
    <div className="animate-pulse space-y-4">
      <div className="flex gap-4 items-center">
        <div className="w-[150px] h-[150px] rounded-full bg-gray-300"></div>
        <div>
          <div className="flex gap-2">
            <div className="space-y-2">
              <p className="h-5 w-60 bg-gray-300 rounded-md"></p>
              <p className="h-2 w-56 bg-gray-300 rounded-md"></p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-3 w-full bg-gray-300 rounded-md"></div>
      <div className="h-3 w-36 bg-gray-300 rounded-md"></div>
      <div className="grid grid-cols-2">
        <div className="flex gap-2">
          <div className="bg-gray-300 rounded-sm w-6 h-3"></div>
          <div className="bg-gray-300 rounded-sm w-32 h-3"></div>
          <div className="bg-gray-300 rounded-sm w-36 h-3"></div>
        </div>
        <div className="flex gap-2">
          <div className="bg-gray-300 rounded-sm w-6 h-3"></div>
          <div className="bg-gray-300 rounded-sm w-32 h-3"></div>
          <div className="bg-gray-300 rounded-sm w-36 h-3"></div>
        </div>
      </div>
    </div>
  );
};
export default BioLoading;
