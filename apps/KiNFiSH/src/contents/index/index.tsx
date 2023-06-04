import clsx from 'clsx';

import { CodeIcon, DocumentIcon, HeartIcon, InfoIcon, InsightIcon, SparklesIcon } from '@/components/Icons';

import CleanIntuitive from '@/contents/index/CleanIntuitive';
import DetailOriented from '@/contents/index/DetailOriented';
import FeaturedCard from '@/contents/index/FeaturedCard';
import Header from '@/contents/index/Header';
import PrettyOptimized from '@/contents/index/PrettyOptimized';
import Quote from '@/contents/index/Quote';

function FeaturedCardSection() {
  return (
    <div className={clsx('content-wrapper')}>
      <div className={clsx('flex flex-col gap-4', 'lg:flex-row lg:gap-8')}>
        <FeaturedCard
          icon={
            <div
              className={clsx(
                'rounded-full bg-amber-300 p-3.5',
                'dark:bg-amber-900'
              )}
            >
              <SparklesIcon className={clsx('h-5 w-5 text-white')} />
            </div>
          }
          title="Fast & Customizable "
          desc="Transform your work into a fast and customizable experience, boosting your productivity and efficiency with streamlined workflows and flexible tools."
        />
        <FeaturedCard
          icon={
            <div
              className={clsx(
                'rounded-full bg-pink-300 p-3.5',
                'dark:bg-pink-900'
              )}
            >
              <HeartIcon className={clsx('h-5 w-5 text-white')} />
            </div>
          }
          title="Collaboration & Communication"
          desc="Unlock the power of collaboration and achieve greater success with seamless communication, shared resources, and real-time project tracking"
        />
        <FeaturedCard
          icon={
            <div
              className={clsx(
                'rounded-full bg-sky-300 p-3.5',
                'dark:bg-sky-900'
              )}
            >
              <CodeIcon className={clsx('h-5 w-5 text-white')} />
            </div>
          }
          title="Attentative for details"
          desc="Writing clean code is a top priority while keeping it as optimized as possible."
        />
      </div>
      <div className={clsx('flex flex-col gap-4', 'lg:flex-row lg:gap-8')}>
        <FeaturedCard
          icon={
            <div
              className={clsx(
                'rounded-full bg-green-300-300 p-3.5',
                'dark:bg-green-900'
              )}
            >
              <DocumentIcon className={clsx('h-5 w-5 text-white')} />
            </div>
          }
          title="Fast & Customizable "
          desc="Transform your work into a fast and customizable experience, boosting your productivity and efficiency with streamlined workflows and flexible tools."
        />
        <FeaturedCard
          icon={
            <div
              className={clsx(
                'rounded-full bg-slate-400 p-3.5',
                'dark:bg-slate-900'
              )}
            >
              <InsightIcon className={clsx('h-5 w-5 text-white')} />
            </div>
          }
          title="Collaboration & Communication"
          desc="Unlock the power of collaboration and achieve greater success with seamless communication, shared resources, and real-time project tracking"
        />
        <FeaturedCard
          icon={
            <div
              className={clsx(
                'rounded-full bg-purple-500 p-3.5',
                'dark:bg-purple-800'
              )}
            >
              <InfoIcon className={clsx('h-5 w-5 text-white')} />
            </div>
          }
          title="Attentative for details"
          desc="Writing clean code is a top priority while keeping it as optimized as possible."
        />
      </div>
    </div>
  );
}

function QuoteSection() {
  return (
    <div className={clsx('content-wrapper')}>
      <div className={clsx('flex items-center justify-center py-8')}>
        <Quote />
      </div>
    </div>
  );
}

function IndexContents() {
  return (
    <>
      <Header />
      <div className={clsx('hidden', 'lg:-mt-16 lg:mb-24 lg:block')}>
        <FeaturedCardSection />
      </div>
      <div className={clsx('-mt-12 mb-12', 'md:mt-0 md:mb-24')}>
        <QuoteSection />
      </div>
      <section className={clsx('mb-12', 'lg:mb-24')}>
        <CleanIntuitive />
      </section>
      <section className={clsx('mb-12', 'lg:mb-24')}>
        <DetailOriented />
      </section>
      <section className={clsx('mb-12', 'lg:mb-24')}>
        <PrettyOptimized />
      </section>
    </>
  );
}

export default IndexContents;
