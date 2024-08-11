import { PersonalQuery, Project } from '../hooks/usePersonalQuery';
import PageLayout from './PageLayout';
import Button from '../shared/ui/ListItem/Button';
import { isNil } from 'lodash';
import React, { useCallback, useMemo, useState } from 'react';
import { Box, Stack, Typography, useTheme } from '@mui/material';
import 'react-multi-carousel/lib/styles.css';
import { Square } from '@mui/icons-material';
import { environment } from '../../environments/environment';
import Carousel from '../shared/ui/Carousel/Carousel';
import ContentBox from '../shared/ui/ContentBox/ContentBox';

type ProjectsPageProps = {
  projectsDTO: PersonalQuery['projects']
}

type SelectedProjectProps = {
  onClose: () => void;
  project: Project;
}

const SelectedProjectView = ({ project, onClose }: SelectedProjectProps) => {
  const theme = useTheme();
  const imgURLs = useMemo(() => project.photos.map((photo) => `${environment.publicURL}/assets/projects/${photo}`), [project]);

  const handleViewMore = useCallback(() => {
    window.open(project.link, '_blank');
  }, [project.link]);

  return (
    <Stack gap={2}>
      <Button value={'Back'} onClick={onClose} />
      <ContentBox>
        <Carousel imageUrls={imgURLs}/>
      </ContentBox>
      <ContentBox>
        <Typography variant={'h4'} fontWeight={"bolder"} color={theme.palette.primary.main}>Description</Typography>
        <Typography variant={'h6'} fontWeight={'bold'} color={theme.palette.primary.main}>{project.description}</Typography>
        <Typography variant={'h4'} fontWeight={"bolder"} color={theme.palette.primary.main}>Technologies</Typography>
        {project.technologies.map((technology) => (
          <Box key={technology} display={'flex'} alignItems={'center'}>
            <Square color={'primary'} /> <Typography variant={'h6'} fontWeight={'bold'} color={theme.palette.primary.main}>{technology}</Typography>
          </Box>
        ))}
      </ContentBox>
      {project.link && <Button value={'VIEW MORE'} onClick={handleViewMore} />}

    </Stack>
  );
};


const ProjectsPage = ({ projectsDTO }: ProjectsPageProps) => {

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const isProjectSelected = !isNil(selectedProject);

  const handleProjectSelect = useCallback((project: Project) => () => {
    setSelectedProject(project);
  }, []);

  const handleCloseProject = useCallback(() => {
    setSelectedProject(null);
  }, []);

  const projects = useMemo(() => {
    const projectKeys = Object.keys(projectsDTO) as (keyof typeof projectsDTO)[];
    return (
      <Stack gap={2}>
        {projectKeys.map((key) => {
          const project = projectsDTO[key];
          return (
            <Button
              key={key}
              value={project.title}
              onClick={handleProjectSelect(project)}
            />
          );
        })}
      </Stack>
    );
  }, [handleProjectSelect, projectsDTO]);

  return (
    <PageLayout title={isProjectSelected ? `${selectedProject.title}` : 'Projects'}>
      {isProjectSelected && <SelectedProjectView project={selectedProject} onClose={handleCloseProject} />}
      {!isProjectSelected && projects}
    </PageLayout>
  );
};

export default ProjectsPage;
