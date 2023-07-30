import clsx from 'clsx';
import { m, useAnimationControls } from 'framer-motion';
import Image from 'next/image';

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
          <span className="modern text-center block bg-gradient-to-r from-red-400 to-blue-500 bg-clip-text text-transparent ">
            
            <strong>
              KinfeMichael  <br /> 
            </strong>{' '}
           
        </span>
        <span>Tariku,{' '}</span> 
          
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
            )}
          >
            Software Dev -  Competitive Programmer
          </strong>{' '}
          who loves and derives great pleasure {' '}
          <span className={clsx('text-center block')}> from the challenge of solving real-world problems </span>
          <span className={clsx('text-center block')}>that are of utmost importance. </span>
       
          
        </m.h1>
      </span>
    </div>
  );
}

export default HeaderTitle;
