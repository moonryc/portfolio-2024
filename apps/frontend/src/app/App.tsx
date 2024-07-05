import NavBar from './layouts/NavBar';
import ParticleEngine from './layouts/ParticleEngine';
import { Route, Routes } from 'react-router-dom';
import HomePage from './layouts/HomePage';
import ContactPage from './layouts/ContactPage';
import ProjectsPage from './layouts/ProjectsPage';
import TechnologiesPage from './layouts/TechnologiesPage';
import AboutMePage from './layouts/AboutMePage';
import { routes } from './routes/routes';
import { Box, Grid } from '@mui/material';
import { usePersonalQuery } from './hooks/usePersonalQuery';
import LoadingScreen from './layouts/LoadingScreen';

function App() {

  const {value:personalData} = usePersonalQuery()

  if(!personalData){
    return <LoadingScreen/>;
  }

  if(personalData){
    return <LoadingScreen/>;
  }

  return (
    <Box px={"8px"}>
      <ParticleEngine>
        <Grid container height={"100vh"}>
          <Grid item sm={12} md={4}>
            <NavBar />
          </Grid>
          <Grid display={"flex"} justifyContent={"center"} alignItems={"start"} mt={[2,0,0,8]} item sm={12} md={8}>
            <Routes>
              <Route path={routes.homePage.path} element={null} />
              <Route path={routes.about.path} element={<AboutMePage aboutMeDTO={personalData.aboutMe} />} />
              <Route path={routes.projects.path} element={<ProjectsPage projectsDTO={personalData.projects} />} />
              <Route path={routes.technologies.path} element={<TechnologiesPage technologiesDTO={personalData.technologies} />} />
              <Route path={routes.contact.path} element={<ContactPage contactDTO={personalData.contactMe} />} />
            </Routes>
          </Grid>
        </Grid>
      </ParticleEngine>
    </Box>
  );
}

export default App;
