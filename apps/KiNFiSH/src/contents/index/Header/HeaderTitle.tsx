import clsx from 'clsx';
import { m, useAnimationControls } from 'framer-motion';
import Image from 'next/image';
import styles from './Header.module.css'
const animation = {
  hide: { x: -32, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  },
};

function HeaderTitle() {
  const controls = useAnimationControls();

  return (
    <div className='flex flex-col justify-center items-center '>
      <m.div
        className={clsx(
          'mb-1 flex items-center gap-1 text-2xl text-slate-600',
          'md:mb-0 md:gap-2 md:text-4xl',
          'dark:text-slate-400'
        )}
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.1 }}
      >
        💻
        <m.div
          initial={{
            opacity: 0,
            y: 16,
            rotate: 30,
            transformOrigin: 'right center',
          }}
          animate={controls}
          transition={{
            type: 'spring',
            delay: 0.35,
            bounce: 0.7,
            duration: 0.7,
          }}
        > 
          {/* { <Image
            className={clsx('w-7 md:w-10')}
            alt="Love-you Gesture"
            src="/assets/emojis/love-you-gesture.png"
            width={48}
            height={48}
            onLoadingComplete={() => {
              controls.start({
                opacity: 1,
                y: 0,
                rotate: 0,
              });
            }}
            priority
          /> } */}
       </m.div>
      </m.div>
      <span className={clsx('text-slate-700', 'dark:text-slate-300')}>
        <m.span
          className={clsx(
            'mb-4 block text-center text-[2.5rem] font-[1000] leading-none',
            'md:mb-6 md:text-7xl'
          )}
          initial={animation.hide}
          animate={animation.show}
          transition={{ delay: 0.2 }}
        >
          I&apos;m{' '}
          <span className={styles.magicText}>
            
          < br />
            <strong>
              KinfeMichael Tariku <br /> 
            </strong>{' '}
           
        </span>
        <span className={styles.magicStar}> </span> 
          
        </m.span>
        <m.h1
          className={clsx(
            'block text-base text-slate-600',
            'md:text-xl',
            'dark:text-slate-400'
          )}
          initial={animation.hide}
          animate={animation.show}
          transition={{ delay: 0.3 }}
        >
          <span className={clsx('lowercase')}>A</span>{' '}
          <strong
            className={clsx(
              'font-bold text-center lowercase text-slate-700',
              'dark:text-slate-300'
             , styles.magicText2)}
          >
            Software Dev -  Competitive Programmer
          </strong>{' '}
          who loves and derives great pleasure {' '}
          <span className={clsx('text-center block')}> from the challenge of solving real-world problems </span>
          <span className={clsx('text-center block')}>that are of utmost importance. </span>
       
          
        </m.h1>
      </span>
    </div>
  //   <div className="font-heading max-w-3xl text-4xl font-bold text-slate-800 dark:text-slate-300 ">
  //   <h1 className=" hover:opacity-95 flex flex-wrap flex-col md:flex-row items-start md:item gap-2 dark:text-slate-100/80 2xl:text-4xl md:text-3xl text-lg">
  //     <span className=" relative inline-block ">
  //       <span className={styles.magicStar}>
  //         <svg viewBox="0 0 512 512">
  //           <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
  //         </svg>
  //       </span>
  //       <span className={styles.magicStar}>
  //         <svg viewBox="0 0 512 512">
  //           <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
  //         </svg>
  //       </span>
  //       <span className={styles.magicStar}>
  //         <svg viewBox="0 0 512 512">
  //           <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
  //         </svg>
  //       </span>
  //       <span className={styles.magicText}> Software Dev -  Competitive Programmer</span>
  //     </span>{" "}
  //     <span className="hidden md:block  bg-gradient-to-tr dark:from-slate-300 from-slate-500 to-slate-600 dark:to-slate-400 bg-clip-text text-transparent">
      
  //     </span>
  //     <span className="  bg-gradient-to-tr hidden md:block dark:from-slate-300 from-slate-500 to-slate-600 dark:to-slate-400 bg-clip-text text-transparent">
  //       <br />
  //     </span>
  //   </h1>
  //   <h1 className="bg-gradient-to-br md:text-4xl xl:text-6xl text-5xl from-red-400 to-blue-600 bg-clip-text uppercase text-transparent dark:from-red-500 dark:to-blue-500">
  //     Kinfe <br />Michael Tariku
  //   </h1>
  // </div>
  );
}

export default HeaderTitle;
