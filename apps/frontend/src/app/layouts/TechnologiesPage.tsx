import { PersonalQuery } from '../hooks/usePersonalQuery';
import React from 'react';
import { Box, Grid, Typography, useTheme } from '@mui/material';

type TechnoligiesPageProps = {
  technologiesDTO: PersonalQuery["technologies"]
}

const Technology =({name}:{name:string})=>{
  const nameWithoutFileExtension = name.replace(/\.[^/.]+$/, "")
  const theme = useTheme()

  return (
    <Box bgcolor={theme.palette.secondary.main} display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <img src={`http://localhost:3000/technologies/${name}`} alt={name}/>
      <Typography textTransform={"uppercase"}>{nameWithoutFileExtension}</Typography>
    </Box>
  )
}

const TechnologiesPage = ({technologiesDTO }:TechnoligiesPageProps) => {
  return (
    <div>
      <Typography>TECHNOLOGIES</Typography>
      <Grid container spacing={"2rem"}>
        {technologiesDTO.map((name)=>(
          <Grid key={name} item xs={4}>
            <Technology name={name}/>
          </Grid>)
        )}
      </Grid>
    </div>
  );
};

export default TechnologiesPage;
