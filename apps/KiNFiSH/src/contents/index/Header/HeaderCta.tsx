import clsx from 'clsx';
import { m, useReducedMotion } from 'framer-motion';
import Link from 'next/link';

import { DocumentIcon } from '@/components/Icons';

const animation = {
  hide: {
    x: -16,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
  },
};

interface HeaderCtaProps {
  isFree?: boolean;
  isFreeAnimationDuration?: number;
}
const handleClick = () => {

}

function ButtonContactMe() {

//  "  text-white cursor-pointer font-bold transition-all duration-[0.3s] ease-[ease] relative inline-block shadow-[inset_2px_2px_2px_0px_rgba(255,255,255,0.1),7px_7px_20px_0px_rgba(26, 35, 126, 0.3),4px_4px_5px_0px_rgba(0,0,0,0.1)] px-4 md:px-[25px] py-2.5 rounded-[5px] bg-transparent",
// "dark:text-white/80 text-slate-900 border-[none] after:absolute after:content-[''] after:w-0 after:h-full after:z-[-1] after:shadow-[-7px_-7px_20px_0px_#1a237e,-4px_-4px_5px_0px_#000,7px_7px_20px_0px_#0002,4px_4px_5px_0px_#0001] after:transition-all after:duration-[0.3s] after:ease-[ease] after:left-0 after:top-0 hover:text-black hover:after:w-full border-slate-300 dark:border-slate-800 hover:dark:text-white hover:after:left-auto hover:after:right-0 active:top-0.2 border w-max"
  return (
    <div className='min-w-[128px] p-0  '>
    <Link
      href="/work/contact"
      className={clsx('button button--solid min-w-[128px] rounded-xl   ', 'md:button--big')}
    >
      PING ME.
    </Link>
    


    </div>
  );
}

function ButtonResume() {
  return (
    <a
      target="_blank"
    
      rel="noreferrer nofollow"
      href="assets\resume\KINFEMICHAEL_TARIKU.pdf"

      download
      className={clsx('button button--ghost px-2', 'md:button--big md:px-2')}
    >
      <DocumentIcon className={clsx('h-5 w-5')} />
       RESUME.
    </a>
  );
}

function AvailableForHire() {
  return (
    <div
      className={clsx(
        'button button--ghost text-accent-500 pointer-events-none gap-2.5 px-2.5 ',
        'md:button--big md:px-2.5',
        'dark:text-accent-400'
      )}
    >
      <span className={clsx('relative flex h-2 w-2')}>
        <span
          className={clsx(
            'bg-accent-600 absolute -top-1 -left-1 inline-flex h-4 w-4 animate-ping rounded-full opacity-75',
            'dark:bg-accent-300'
          )}
        />
        <span
          className={clsx(
            'bg-accent-500 relative inline-flex h-2 w-2 rounded-full ',
            'dark:bg-accent-400'
          )}
        />
      </span>
      PING ME ANYTIME :)
    </div>
  );
}

function HeaderCta({
  isFree = true,
  isFreeAnimationDuration = 4,
}: HeaderCtaProps) {
  const shouldReduceMotion = useReducedMotion();

  let isFreeVariants = {
    hide: {
      x: 0,
      opacity: 1,
    },
    show: {
      x: -48,
      opacity: 0,
    },
  };

  if (shouldReduceMotion) {
    isFreeVariants = {
      hide: {
        x: 0,
        opacity: 1,
      },
      show: {
        x: 0,
        opacity: 0,
      },
    };
  }

  return (

    <div className="flex flex-row justify-center items-center ">


      <m.div className={clsx('flex gap-2')} initial="hide" animate="show">
        <m.div
          className={clsx('relative z-20')}
          variants={animation}
          transition={{ delay: 0.4 }}
        >
          <ButtonContactMe />
        </m.div>
        {isFree ? (
          <m.div
            variants={animation}
            transition={{ delay: 2.8 }}
            className={clsx('relative z-10')}
          >
            <m.div
              variants={isFreeVariants}
              transition={{ delay: isFreeAnimationDuration + 1.5, duration: 0.4 }}
            >
              <AvailableForHire />
            </m.div>
            <m.div
              className={clsx('absolute top-0 left-0')}
              initial={{ x: -48, opacity: 0, pointerEvents: 'none' }}
              animate={{ x: 0, opacity: 1, pointerEvents: 'auto' }}
              transition={{ delay: isFreeAnimationDuration + 1.6, duration: 0.4 }}
              >
              <ButtonResume />
            </m.div>
          </m.div>
        ) : (
          <m.div variants={animation} transition={{ delay: 0.5 }}>
            <ButtonResume />
          </m.div>
        )}
      </m.div>
      </div>
  );
}

export default HeaderCta;
