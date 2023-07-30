import Head from '@/components/meta/Head';

import { getBaseUrl } from '@/helpers/url';

import IndexContents from '@/contents/index';

function Index() {
  return (
    <>
      <Head
        title="KINFEMICHAEL TARIKU · Software Developer | Competitive Programmer"
        description="Hello, I am Kinfe, a resident of Earth who derives great pleasure from the challenge of solving real-world problems that are of utmost importance"
        ogImage={`${getBaseUrl()}/assets/images/me-removebg.png`}
        overrideTitle
      />
      <IndexContents />
    </>
  );
}

export default Index;
