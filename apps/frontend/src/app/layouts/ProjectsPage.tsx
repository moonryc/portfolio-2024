import { PersonalQuery, Project } from '../hooks/usePersonalQuery';
import PageLayout from './PageLayout';
import Button from '../shared/ui/ListItem/Button';
import { isNil } from 'lodash';
import React, { useCallback, useMemo, useState } from 'react';
import { Box, Stack, Typography, useTheme } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ImageModal from '../shared/ui/ImageModal/ImageModal';
import { Square } from '@mui/icons-material';
import { environment } from '../../environments/environment';

type ProjectsPageProps = {
  projectsDTO: PersonalQuery["projects"]
}

type SelectedProjectProps = {
  onClose: ()=>void;
  project: Project;
}

const responsiveCarousel = {
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

const SelectedProjectView = ({project, onClose}: SelectedProjectProps)=>{
  const theme = useTheme()

  const [imgURLForModal, setImgURLForModal] = useState<string | null>(null);
  const hasSelectedImgURLForModal = !isNil(imgURLForModal)


  const handleCloseImageModal = useCallback(()=>{
    setImgURLForModal(null)
  },[])

  const handleOpenImageModal = useCallback((imgURL:string)=>()=>{
    setImgURLForModal(imgURL)
  },[])

  return (
    <Stack gap={2}>
      <Button value={"Back"} onClick={onClose}/>
      <Box bgcolor={theme.palette.secondary.light} p={2}>
        <Carousel
          responsive={responsiveCarousel}
          centerMode
          infinite
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          {project.photos.map((photo)=> {
            const imgURL = `${environment.publicURL}/assets/projects/${photo}`
            return (
              <Box key={photo} onClick={handleOpenImageModal(imgURL)} display={"flex"} justifyContent={"center"}>
              <img loading={'lazy'} src={imgURL} alt={photo} style={{maxWidth:"25vw", maxHeight: "25vh"}}  />
            </Box>
            );
          })}
        </Carousel>
      </Box>
      <Box p={2} bgcolor={theme.palette.secondary.light} color={theme.palette.primary.main}>
        <Typography variant={"h3"}>Description</Typography>
        <Typography variant={"h6"} fontWeight={"bold"}>{project.description}</Typography>
        <Typography variant={"h3"}>Technologies</Typography>
         {project.technologies.map((technology)=>(
           <Box key={technology} display={"flex"} alignItems={"center"}>
            <Square color={"primary"} /> <Typography variant={"h6"} fontWeight={"bold"}>{technology}</Typography>
           </Box>
         ))}
      </Box>
      <ImageModal open={hasSelectedImgURLForModal} onClose={handleCloseImageModal} imgURL={imgURLForModal}/>
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
  }, [handleProjectSelect, projectsDTO]);

  return (
    <PageLayout title={isProjectSelected ? `Projects > ${selectedProject.title}` : "Projects"}>
      {isProjectSelected && <SelectedProjectView project={selectedProject} onClose={handleCloseProject}/>}
      {!isProjectSelected && projects}
    </PageLayout>
  );
};

export default ProjectsPage;
