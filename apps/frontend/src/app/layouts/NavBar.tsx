import Name from '../shared/ui/Name/Name';

import NavButton from '../shared/ui/ListItem/NavButton';
import { routes } from '../routes/routes';
import { Grid, Stack } from '@mui/material';

const locations: Parameters<typeof NavButton>[0][] = [
  { value: 'Home', href: routes.homePage.path },
  { value: 'About Me', href: routes.about.path },
  { value: 'Projects', href: routes.projects.path },
  { value: 'Technologies', href: routes.technologies.path },
  { value: 'Contact', href: routes.contact.path }
];

const NavBar = () => {
  return (
    <Stack gap={4}>
      <Name />
      <Grid container spacing={2}>
        {locations.map((loc) => {
          if (loc.value === locations[0].value) {
            return (
              <Grid  key={loc.value} item xs={12} md={12}>
                <NavButton  {...loc} />
              </Grid>
            );
          } else {
            return (
              <Grid key={loc.value} item xs={6} md={12}>
                <NavButton {...loc} />
              </Grid>
            );
          }
        })}
      </Grid>
    </Stack>
  );
};

export default NavBar;
