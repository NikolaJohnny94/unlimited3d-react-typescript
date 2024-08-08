import SVG from '../SVG'

export const ImageNoImageComponent = () => {
  return (
    <>
      <div className='flex justify-between p-6'>
        <div className='text-black text-base font-normal leading-normal !text-[18px]'>
          Image
        </div>
        <div className='text-black text-base font-normal leading-normal !text-[18px]'>
          No Image
        </div>
      </div>
      <div className='flex justify-between px-6'>
        <div className='text-black text-base font-normal leading-normal w-[45px] !h-[45px]'>
          <SVG name='NO IMAGE' />
        </div>
        <div className='flex !w-[45px] !h-[45px] justify-center items-center gap-2 flex-shrink-0 rounded-full border border-gray-300 bg-gray-100'>
          <SVG name='ADD IMAGE' />
        </div>
      </div>
    </>
  )
}
