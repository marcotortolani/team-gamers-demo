'use client';
import React from 'react';
import AnimatedDropdown from './AnimatedDropdownButton';
import { TEAM_GAMERS_CATEGORIES } from '@/utils/static_data';
import { Gamepad2, PlayCircleIcon, StickyNote } from 'lucide-react';

const { CAT_GAMERS, CAT_EDITORIAL, CAT_MUSICA } = TEAM_GAMERS_CATEGORIES;
const CAT_GAMERS_OPTIONS = Object.values(CAT_GAMERS);
const CAT_EDITORIAL_OPTIONS = Object.values(CAT_EDITORIAL);
const CAT_MUSICA_OPTIONS = Object.values(CAT_MUSICA);

export default function DropdownMenu() {
  return (
    <div className=" absolute -bottom-20 left-0 w-full px-1 xs:px-4 flex items-center justify-between ">
      <AnimatedDropdown
        Icon={Gamepad2}
        title={'Gamers'}
        options={CAT_GAMERS_OPTIONS}
      />
      <AnimatedDropdown
        Icon={StickyNote}
        title={'Editorial'}
        options={CAT_EDITORIAL_OPTIONS}
      />
      <AnimatedDropdown
        Icon={PlayCircleIcon}
        title={'Música'}
        options={CAT_MUSICA_OPTIONS}
      />
    </div>
  );
}
