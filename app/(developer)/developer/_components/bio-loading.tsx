const BioLoading = () => {
  return (
    <div className='animate-pulse space-y-4'>
      <div className='flex items-center gap-4'>
        <div className='h-[150px] w-[150px] rounded-full bg-gray-300'></div>
        <div>
          <div className='flex gap-2'>
            <div className='space-y-2'>
              <p className='h-5 w-60 rounded-md bg-gray-300'></p>
              <p className='h-2 w-56 rounded-md bg-gray-300'></p>
            </div>
          </div>
        </div>
      </div>
      <div className='h-3 w-full rounded-md bg-gray-300'></div>
      <div className='h-3 w-36 rounded-md bg-gray-300'></div>
      <div className='grid grid-cols-2'>
        <div className='flex gap-2'>
          <div className='h-3 w-6 rounded-sm bg-gray-300'></div>
          <div className='h-3 w-32 rounded-sm bg-gray-300'></div>
          <div className='h-3 w-36 rounded-sm bg-gray-300'></div>
        </div>
        <div className='flex gap-2'>
          <div className='h-3 w-6 rounded-sm bg-gray-300'></div>
          <div className='h-3 w-32 rounded-sm bg-gray-300'></div>
          <div className='h-3 w-36 rounded-sm bg-gray-300'></div>
        </div>
      </div>
    </div>
  );
};
export default BioLoading;
