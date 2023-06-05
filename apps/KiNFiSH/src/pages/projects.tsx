import ProjectsContents from '@/contents/projects';
import HeaderImage from '@/contents/projects/HeaderImage';
import Page from '@/contents-layouts/Page';
import TalentBoom from '@/contents/projects/TalentBoom';

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
      <TalentBoom />
    </Page>
  );
}

export default Projects;
