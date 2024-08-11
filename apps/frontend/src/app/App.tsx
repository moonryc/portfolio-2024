import NavBar from './layouts/NavBar';
import { Route, Routes } from 'react-router-dom';
import ContactPage from './layouts/ContactPage';
import ProjectsPage from './layouts/ProjectsPage';
import TechnologiesPage from './layouts/TechnologiesPage';
import AboutMePage from './layouts/AboutMePage';
import { routes } from './routes/routes';
import { Box, Grid, useTheme } from '@mui/material';
import { usePersonalQuery } from './hooks/usePersonalQuery';
import BackgroundAnimation from './layouts/BackgroundAnimation';

function App() {
  const theme = useTheme();
  const { value: personalData } = usePersonalQuery();

  if (!personalData) {
    return null;
  }

  return (
    <Box bgcolor={theme.palette.primary.main} position={'relative'} zIndex={1}>
      <BackgroundAnimation />
      <Box position={'relative'} zIndex={2}>
        <Grid container height={'100vh'} overflow={'auto'} zIndex={1}>
          <Grid item sm={12} md={4} paddingTop={[2, 4]} paddingLeft={[2, 4]} paddingRight={[2, 4, 0]}>
            <NavBar />
          </Grid>
          <Grid display={'flex'} justifyContent={'center'} alignItems={'start'} mt={[2, 2, 4, 8]} item sm={12} md={8}>
            <Routes>
              <Route path={routes.homePage.path} element={null} />
              <Route path={routes.about.path} element={<AboutMePage aboutMeDTO={personalData.aboutMe} />} />
              <Route path={routes.projects.path} element={<ProjectsPage projectsDTO={personalData.projects} />} />
              <Route path={routes.technologies.path}
                     element={<TechnologiesPage technologiesDTO={personalData.technologies} />} />
              <Route path={routes.contact.path} element={<ContactPage contactDTO={personalData.contactMe} />} />
            </Routes>
          </Grid>
        </Grid>
        {/*</ParticleEngine>*/}
      </Box>
    </Box>
  );
}

export default App;
