export function TitleSummary({ title, icon }) {
  const Icon = icon
  return (
    <h1 className=" px-4 py-[0.15rem] mb-0 uppercase font-medium text-sm md:text-base lg:text-lg flex items-center gap-2 bg-Secondary rounded-full">
      <div className=" w-4 h-4 md:w-6 md:h-6 ">
        <Icon width={'100%'} height={'100%'} />
      </div>
      {title}
    </h1>
  )
}