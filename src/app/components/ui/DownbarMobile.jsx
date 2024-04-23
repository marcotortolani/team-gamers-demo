'use client';
import React from 'react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import {
  ChevronLeft,
  SearchIcon,
  HomeIcon,
  HeartIcon,
  Gamepad2
} from 'lucide-react';

const navButtons = {
  back: {
    id: 1,
    title: 'back',
    icon: ChevronLeft,
    href: '',
  },
  search: {
    id: 2,
    title: 'search',
    icon: SearchIcon,
    href: '#',
  },
  home: {
    id: 3,
    title: 'home',
    icon: HomeIcon,
    href: '/',
  },
  favourites: {
    id: 4,
    title: 'favoritos',
    icon: HeartIcon,
    href: '/favoritos',
  },
  video: {
    id: 5,
    title: 'gamers',
    icon: Gamepad2,
    href: '/gaming/gamers',
  },
};

export default function DownbarMobile() {
  const [currentPath, setCurrentPath] = useState('/');
  const [previousPath, setPreviousPath] = useState(['', '']);
  const path = usePathname();

  useEffect(() => {
    if (path !== currentPath) {
      let newArray = previousPath;
      newArray[0] = currentPath;
      newArray[1] = path;
      setPreviousPath([...newArray]);
      setCurrentPath(path);
    }
  }, [path, currentPath, previousPath]);

  return (
    <div className=" z-50 fixed bottom-0 w-full h-[8vh] min-h-[40px] max-h-[60px]  p-[0.8rem] py-4  flex items-center justify-center text-White bg-Primary lg:hidden">
      <ul className=" w-full h-full flex items-center justify-around ">
        {Object.values(navButtons).map((button) => (
          <StyledTab
            key={button.id}
            title={button.title}
            icon={button.icon}
            href={button.href}
            currentPath={currentPath}
            previousPath={previousPath[0]}
          />
        ))}
      </ul>
    </div>
  );
}

export function StyledTab({ title, icon, href, currentPath, previousPath }) {
  const IconComponent = icon;
  return (
    <li
      className={`h-fit p-2 flex items-center justify-center ${
        currentPath === href ? 'bg-Black' : 'bg-transparent'
      }  rounded-lg `}
    >
      <Link
        className=" w-full h-full flex items-center justify-center"
        href={title !== 'back' ? href : previousPath}
        aria-label={title}
      >
        <IconComponent />
      </Link>
    </li>
  );
}
