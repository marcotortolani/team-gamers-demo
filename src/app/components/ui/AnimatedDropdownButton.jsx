'use client'
import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { ChevronDownIcon } from 'lucide-react'

const AnimatedDropdown = ({ Icon, title, options }) => {
  const [open, setOpen] = useState(false)
  const [optionActive, setOptionActive] = useState('')
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const lastPath = pathname.split('/').slice(-1)[0]

    if (lastPath === '') {
      setOptionActive('home')
    } else {
      setOptionActive(lastPath)
    }
    setOpen(false)
  }, [pathname])

  function handleOption(slug) {
    setOpen(false)
    router.push(`/${slug}`)
  }

  return (
    <div className={` flex items-center justify-center`}>
      <motion.div animate={open ? 'open' : 'closed'} className="relative">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className={`${
            pathname.includes(title.toLowerCase())
              ? 'bg-Secondary text-Black '
              : 'bg-black text-indigo-50'
          } flex items-center gap-1 px-1 xs:px-2 py-0 rounded-full  border-Secondary border-[2px] transition-colors duration-200 ease-in-out`}
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
            optionActive={pathname === options[0].name.toLowerCase()}
          />

          {options.map((option, i) => {
            if (i > 0) {
              return (
                <Option
                  key={i}
                  setOpen={() => handleOption(option.slug)}
                  text={option.name}
                  optionActive={optionActive === option.name.toLowerCase()}
                />
              )
            } else {
              return null
            }
          })}
        </motion.ul>
      </motion.div>
    </div>
  )
}

const Option = ({ firstOption, text, setOpen, optionActive }) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => setOpen(false)}
      className={`${
        optionActive
          ? 'bg-Primary text-White py-1 justify-center absolute left-0 translate-x-[50%]'
          : firstOption
          ? ' text-white bg-Black font-normal justify-center absolute left-0 translate-x-[50%] h-8 rounded-t-none '
          : ' bg-transparent text-black '
      } 
      relative -top-3 flex items-center w-full text-xs xs:text-sm font-medium whitespace-nowrap uppercase rounded-2xl hover:bg-indigo-100 hover:text-Primary transition-colors cursor-pointer`}
    >
      <span className="px-1 ">{firstOption ? 'Ver todo' : text}</span>
    </motion.li>
  )
}

export default AnimatedDropdown

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
}

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
}

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
}
