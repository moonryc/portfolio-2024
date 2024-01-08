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

function App() {
  return (
    <Box>
      <ParticleEngine>
        <Grid container>
          <Grid item sm={12} md={4}>
            <NavBar />
          </Grid>
          <Grid item sm={12} md={4}>
            <Routes>
              <Route path={routes.homePage.path} element={<HomePage />} />
              <Route path={routes.about.path} element={<AboutMePage />} />
              <Route path={routes.contact.path} element={<ContactPage />} />
              <Route path={routes.projects.path} element={<ProjectsPage />} />
              <Route path={routes.technologies.path} element={<TechnologiesPage />} />
            </Routes>
          </Grid>
        </Grid>
      </ParticleEngine>
    </Box>
  );
}

export default App;
