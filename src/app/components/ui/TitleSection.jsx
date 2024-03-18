export function TitleSection({ icon, title, outline, borderColor }) {
  const Icon = icon
  return (
    <h2
      className={` ${
        outline
          ? 'px-4 py-[0.1rem]  bg-Black uppercase font-medium text-lg gap-3 border-2 rounded-full'
          : 'text-xl gap-2'
      } ${borderColor} flex items-center justify-center  text-White `}
    >
      <div className={`${outline ? 'w-6 h-6' : 'w-7 h-7'} `}>
        <Icon width={'100%'} height={'100%'} />
      </div>
      <span
        className={`${
          outline ? ' border-none' : 'border-b-4 leading-6 border-b-Primary'
        } `}
      >
        {title}
      </span>
    </h2>
  )
}
