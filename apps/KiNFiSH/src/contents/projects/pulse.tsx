import { FC } from 'react';

import SectionTitle from '@/components/sections/SectionTitle';

const PulseHome: FC = () => (
  <div>
    <SectionTitle
      title="PulseHome"
      caption="medical service"
      description="PulseHome -  a mobile app that aims to revolutionize medical care by enhancing doctor-patient engagement and automating manual tasks. "
      button={{
        title: 'learn more',
        href: '/docs/pulse',
      }}
    />
  </div>
);
export default PulseHome;
