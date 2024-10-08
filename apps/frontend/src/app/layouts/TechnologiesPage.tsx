import { PersonalQuery } from '../hooks/usePersonalQuery';
import React from 'react';
import { Grid, Stack, Typography, useTheme } from '@mui/material';
import PageLayout from './PageLayout';
import { environment } from '../../environments/environment';

type TechnoligiesPageProps = {
  technologiesDTO: PersonalQuery['technologies']
}

const Technology = ({ name }: { name: string }) => {
  const nameWithoutFileExtension = name.replace(/\.[^/.]+$/, '');
  const theme = useTheme();

  const imageStyle = {
    display: 'block',
    width: '100%',
    height: 'auto',
    filter: 'grayscale(100%) sepia(100%) contrast(70%)'
  };

  return (
    <Stack>
      <img style={imageStyle} src={`${environment.publicURL}/assets/technologies/${name}`} alt={name} />
      <Typography
        variant={'h6'}
        fontWeight={'bold'}
        textAlign={'center'}
        textTransform={'uppercase'}
        color={theme.palette.primary.main}
        bgcolor={theme.palette.secondary.light}
        boxShadow={"5px 5px 5px black"}
      >{nameWithoutFileExtension}</Typography>
    </Stack>
  );
};

const TechnologiesPage = ({ technologiesDTO }: TechnoligiesPageProps) => {
  return (
    <PageLayout title={'technologies'}>
      <Stack minWidth={'80%'} gap={2} justifyContent={'center'}>
        <Grid container spacing={'2rem'}>
          {technologiesDTO.map((name) => (
            <Grid key={name} item xs={6} md={3}>
              <Technology name={name} />
            </Grid>)
          )}
        </Grid>
      </Stack>
    </PageLayout>
  );
};

export default TechnologiesPage;
