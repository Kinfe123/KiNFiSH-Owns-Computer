import ProjectsContents from '@/contents/projects';
import CodeIt from '@/contents/projects/CodeIt';
import HeaderImage from '@/contents/projects/HeaderImage';
import TalentBoom from '@/contents/projects/TalentBoom';
import WeFarm from '@/contents/projects/WeFarm';
import Page from '@/contents-layouts/Page';
import Anon from '@/contents/projects/AnonThougts';
import PulseHome from '@/contents/projects/pulse';

function Projects() {
  return (
    <Page
      frontMatter={{
        title: 'Projects',
        description: 'Everything i have pushed to github  👩‍💻',
      }}
      headerImage={<HeaderImage />}
    >
      <ProjectsContents />
      <div className="mt-10" />
      <WeFarm />
      <div className="mt-10" />

      <CodeIt />
      <div className="mt-10" />
      <Anon />
      <div className="mt-10" />
      <PulseHome />
      <div className="mt-10" />
      <TalentBoom />
    </Page>
  );
}

export default Projects;
