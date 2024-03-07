'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronRightIcon } from 'lucide-react';

export default function DropdownButton({ icon, title, options }) {
  const [isOpen, setIsOpen] = useState(false);
  //const [optionSelected, setOptionSelected] = useState(options[0]);
  const router = useRouter();

  const IconComponent = icon;

  function handleOption(slug) {
    //setOptionSelected(options[id - 1]);
    setIsOpen(false);
    router.push(`/${slug}`);
  }
  return (
    <div className=" relative flex flex-col">
      <button
        id="dropdownBottomButton"
        dataDropdownToggle="dropdownBottom"
        dataDropdownPlacement="bottom"
        onClick={() => setIsOpen(!isOpen)}
        className=" text-white bg-black sm:hover:bg-slate-800 border-EpaSecondary border-[1px] focus:ring-4 focus:outline-none font-light uppercase rounded-full text-xs px-2 py-1 flex items-center gap-2 "
        type="button"
      >
        <div className=" w-5 h-5">
          <IconComponent size="100%" />
        </div>
        {title}
        <div className=" w-5 h-5 ">
          <ChevronRightIcon size="100%" />
        </div>
      </button>
      <div
        id="dropdownBottom"
        className={`${
          isOpen ? ' scale-y-100 ' : ' scale-y-0 '
        } -z-10 absolute top-1 pt-6 w-full transition-all duration-300 ease-in-out bg-EpaSecondary divide-y divide-gray-100 rounded-lg shadow`}
      >
        <ul
          className="py-2 text-sm font-medium text-black uppercase"
          aria-labelledby="dropdownBottomButton"
        >
          {options?.map((option, i) => (
            <li key={i} onClick={() => handleOption(option.slug)}>
              <a href="#" className="block px-2 py-2 hover:bg-gray-100 ">
                {option.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
