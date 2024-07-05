import { PersonalQuery, Project } from '../hooks/usePersonalQuery';
import PageLayout from './PageLayout';
import Button from '../shared/ui/ListItem/Button';
import { isNil, noop } from 'lodash';
import React, { useCallback, useMemo, useState } from 'react';
import { Box, Stack, Typography, useTheme } from '@mui/material';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

type ProjectsPageProps = {
  projectsDTO: PersonalQuery["projects"]
}

type SelectedProjectProps = {
  onClose: ()=>void;
  project: Project;
}

const SelectedProjectView = ({project, onClose}: SelectedProjectProps)=>{

  console.log(project)

  const theme = useTheme()

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <Stack gap={2}>
      <Button value={"Back"} onClick={onClose}/>
      <Box bgcolor={theme.palette.secondary.light} p={2}>
        <Carousel responsive={responsive} centerMode infinite>
          {project.photos.map((photo)=>(
            <Box key={photo}>
              {/*TODO fix the scaling*/}
              <img loading={"lazy"} src={`http://localhost:3000/projects/${photo}`} alt={photo} width={"300px"}/>
            </Box>
          ))}
        </Carousel>
      </Box>
      <Box p={2} bgcolor={theme.palette.secondary.light} color={theme.palette.primary.main}>
        <Typography variant={"h4"}>Description</Typography>
        <Typography variant={"body1"} fontWeight={"bold"}>{project.description}</Typography>
        <Typography variant={"h4"}>Technologies</Typography>
        <Typography variant={"body1"}>{project.technologies}</Typography>
      </Box>
    </Stack>
  );
}


const ProjectsPage = ({projectsDTO}:ProjectsPageProps) => {

  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const isProjectSelected = !isNil(selectedProject)

  const handleProjectSelect = useCallback((project:Project)=>()=>{
    setSelectedProject(project)
  },[])

  const handleCloseProject = useCallback(()=>{
    setSelectedProject(null)
  },[])

  const projects = useMemo(() => {
    const projectKeys = Object.keys(projectsDTO) as (keyof typeof projectsDTO)[]
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
    )
  }, [projectsDTO]);

  return (
    <PageLayout title={isProjectSelected ? selectedProject.title : "Projects"}>
      {isProjectSelected && <SelectedProjectView project={selectedProject} onClose={handleCloseProject}/>}
      {!isProjectSelected && projects}
    </PageLayout>
  );
};

export default ProjectsPage;
