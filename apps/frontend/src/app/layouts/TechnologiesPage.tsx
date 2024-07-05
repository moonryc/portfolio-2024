import { PersonalQuery } from '../hooks/usePersonalQuery';
import React from 'react';
import { Box, Grid, Stack, Typography, useTheme } from '@mui/material';
import PageHeader from '../components/PageHeader';
import PageLayout from './PageLayout';

type TechnoligiesPageProps = {
  technologiesDTO: PersonalQuery["technologies"]
}

const Technology =({name}:{name:string})=>{
  const nameWithoutFileExtension = name.replace(/\.[^/.]+$/, "")
  const theme = useTheme()

  const containerStyle = {
    position: 'relative',
    display: 'inline-block',
    filter: 'sepia(100%)',
  };

  const imageStyle = {
    display: 'block',
    width: '100%',
    height: 'auto',
    filter: 'grayscale(100%) sepia(200%) contrast(70%)',
  };

  const overlayStyle = {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(to bottom, #ff0000, #0000ff)', // Change these colors to your desired two tones
    mixBlendMode: 'multiply',
    pointerEvents: 'none',
  };

  return (
    <Stack>
      {/*<Box sx={containerStyle}>*/}
        <img style={imageStyle} src={`http://localhost:3000/technologies/${name}`} alt={name}/>
        {/*<Box sx={overlayStyle}></Box>*/}
      {/*</Box>*/}
      <Typography variant={"h6"} fontWeight={"bold"} textAlign={"center"} textTransform={"uppercase"} color={theme.palette.primary.main} bgcolor={theme.palette.secondary.light}>{nameWithoutFileExtension}</Typography>
    </Stack>
  )
}

const TechnologiesPage = ({technologiesDTO }:TechnoligiesPageProps) => {
  return (
    <PageLayout title={"technologies"}>
    <Stack minWidth={"80%"} gap={2} justifyContent={"center"}>
      <Grid container spacing={"2rem"}>
        {technologiesDTO.map((name)=>(
          <Grid key={name} item xs={3}>
            <Technology name={name}/>
          </Grid>)
        )}
      </Grid>
    </Stack>
    </PageLayout>
  );
};

export default TechnologiesPage;
