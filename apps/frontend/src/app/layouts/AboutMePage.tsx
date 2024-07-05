import { Box, Typography, useTheme } from '@mui/material';
import { PersonalQuery } from '../hooks/usePersonalQuery';
import PageLayout from './PageLayout';
import React from 'react';

type AboutMePageProps = {
  aboutMeDTO: PersonalQuery["aboutMe"]
}

const AboutMePage = ({aboutMeDTO}:AboutMePageProps) => {
  const theme = useTheme()

  return (
    <PageLayout title={"About Me"}>
      <Box bgcolor={theme.palette.secondary.light} >
        {aboutMeDTO.map((sentence)=>(
          <React.Fragment key={sentence}>
            <Typography p={2} variant={"h6"} fontWeight={"bolder"} color={theme.palette.primary.main}>{sentence}</Typography>
          </React.Fragment>)
        )}
      </Box>
    </PageLayout>
  );
};

export default AboutMePage;
