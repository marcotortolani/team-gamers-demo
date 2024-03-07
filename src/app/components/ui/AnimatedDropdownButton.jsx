'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from 'lucide-react';

const AnimatedDropdown = ({ Icon, title, options }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  function handleOption(slug) {
    setOpen(false);
    router.push(`/${slug}`);
  }

  return (
    <div className=" flex items-center justify-center">
      <motion.div animate={open ? 'open' : 'closed'} className="relative">
        <button
          onClick={() => setOpen((pv) => !pv)}
          className="flex items-center gap-1 px-1 xs:px-2 py-0 rounded-full text-indigo-50 bg-black border-Secondary border-[2px] transition-colors"
        >
          <div className=" w-4 xs:w-5">
            <Icon size={'100%'} />
          </div>
          <span className="font-light uppercase text-[0.6rem] xs:text-xs">
            {title}
          </span>
          <motion.span className="  w-4 xs:w-5" variants={iconVariants}>
            <ChevronDownIcon width={'100%'} />
          </motion.span>
        </button>

        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: 'top', translateX: '-50%' }}
          className="-z-10  flex flex-col gap-2 p-2 pt-6 rounded-b-lg bg-Secondary absolute top-[50%] left-[50%] w-full overflow-hidden"
        >
          <Option
            firstOption
            setOpen={() => handleOption(options[0].slug)}
            text={options[0].name}
          />

          {options.map((option, i) => {
            if (i > 0) {
              return (
                <Option
                  key={i}
                  setOpen={() => handleOption(option.slug)}
                  text={option.name}
                />
              );
            } else {
              return null;
            }
          })}
        </motion.ul>
      </motion.div>
    </div>
  );
};

const Option = ({ firstOption, text, setOpen }) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => setOpen(false)}
      className={`${
        firstOption
          ? ' text-white bg-black font-normal justify-center absolute left-0 translate-x-[50%] h-8 rounded-t-none '
          : null
      } relative -top-3 flex items-center w-full text-xs xs:text-sm font-medium whitespace-nowrap uppercase rounded-2xl hover:bg-indigo-100 text-black hover:text-Primary transition-colors cursor-pointer`}
    >
      <span className="px-1 ">{text}</span>
    </motion.li>
  );
};

export default AnimatedDropdown;

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: 'afterChildren',
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: 'beforeChildren',
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: 'afterChildren',
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};
