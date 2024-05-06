import { SetStateAction, useState } from 'react';
import { animate, motion } from 'framer-motion';
import { cn } from '@/utils/utils';
interface Props {
  color: string;
  img: string;
  children?: React.ReactNode;
  hover: boolean;
  setHover: React.Dispatch<SetStateAction<boolean>>;
}
const Card = ({ color, img, children, hover, setHover }: Props) => {
  console.log(hover);
  const cardVariants = {
    initial: {
      y: 0,
      x: '75%',
    },
    animate: (hover: boolean) => ({
      y: hover ? -30 : 0,
    }),
  };
  const divVariants = {
    initial: {
      y: 0,
    },
    animate: (hover: boolean) => ({
      y: hover ? 10 : 0,
    }),
  };
  const starVariants1 = {
    initial: {
      x: 120,
      y: -45,
      opacity: 0,
    },
    animate: (hover: boolean) => ({
      opacity: hover ? 1 : 0,
      scale: hover ? 1.5 : 1,
      x: hover ? 90 : 120,
      y: hover ? -95 : -45,
      rotate: hover ? -20 : 0,
    }),
  };
  const starVariants2 = {
    initial: {
      x: 260,
      y: -20,
    },
    animate: (hover: boolean) => ({
      opacity: hover ? 1 : 0,
      scale: hover ? 1.5 : 1,
      x: hover ? 280 : 260,
      y: hover ? -70 : -20,
      rotate: hover ? 20 : 0,
    }),
  };
  return (
    <div
      className="h-[525px] w-[400px]"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className=" relative top-[30%]">
        <motion.div
          className="bg-[#FFC65C] w-[400px] h-16 rounded-tr-full relative -z-20 "
          initial="initial"
          animate="animate"
          variants={divVariants}
          custom={hover}
          transition={{
            type: 'tween',
            ease: 'easeInOut',
            duration: '0.3',
          }}
        >
          <div className="w-full h-48 absolute bottom-0">
            <motion.img
              className={cn('absolute w-40 -bottom-6 -z-10 ', {
                grayscale: !hover,
              })}
              initial={'initial'}
              animate={'animate'}
              variants={cardVariants}
              custom={hover}
              transition={{
                type: 'tween',
                ease: 'easeInOut',
                duration: '0.3',
              }}
              src={img}
              alt="image"
            />
          </div>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#FFC65C"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            initial="initial"
            animate="animate"
            variants={starVariants1}
            custom={hover}
            transition={{
              type: 'tween',
              ease: 'easeInOut',
              duration: '0.3',
            }}
          >
            <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
            <path d="M20 3v4" />
            <path d="M22 5h-4" />
            <path d="M4 17v2" />
            <path d="M5 18H3" />
          </motion.svg>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#3F7A8C"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            initial="initial"
            animate="animate"
            variants={starVariants2}
            custom={hover}
            transition={{
              type: 'tween',
              ease: 'easeInOut',
              duration: '0.3',
            }}
          >
            <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
            <path d="M20 3v4" />
            <path d="M22 5h-4" />
            <path d="M4 17v2" />
            <path d="M5 18H3" />
          </motion.svg>
        </motion.div>
        <div
          className="w-[400px] h-[300px] rounded-b-2xl relative"
          style={{ backgroundColor: color }}
        >
          <div
            className="w-[200px] h-2 absolute -top-2 rounded-t-md translate-x-1/2"
            style={{ backgroundColor: color }}
          />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Card;
