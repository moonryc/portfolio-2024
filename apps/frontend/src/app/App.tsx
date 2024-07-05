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

function App() {

  const {value:personalData} = usePersonalQuery()

  if(!personalData){
    return null;
  }

  return (
    <Box>
      <ParticleEngine>
        <Grid container height={"100vh"}>
          <Grid item sm={12} md={4}>
            <NavBar />
          </Grid>
          <Grid display={"flex"} justifyContent={"center"} alignItems={"center"} item sm={12} md={8}>
            <Routes>
              <Route path={routes.homePage.path} element={<HomePage />} />
              <Route path={routes.about.path} element={<AboutMePage aboutMeDTO={personalData.aboutMe} />} />
              <Route path={routes.contact.path} element={<ContactPage contactDTO={personalData.contactMe} />} />
              <Route path={routes.projects.path} element={<ProjectsPage />} />
              <Route path={routes.technologies.path} element={<TechnologiesPage technologiesDTO={personalData.technologies} />} />
            </Routes>
          </Grid>
        </Grid>
      </ParticleEngine>
    </Box>
  );
}

export default App;
