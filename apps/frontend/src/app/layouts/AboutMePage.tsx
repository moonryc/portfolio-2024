import { Box, Typography, useTheme } from '@mui/material';
import { PersonalQuery } from '../hooks/usePersonalQuery';
import PageLayout from './PageLayout';
import React from 'react';
import ContentBox from '../shared/ui/ContentBox/ContentBox';

type AboutMePageProps = {
  aboutMeDTO: PersonalQuery["aboutMe"]
}

const AboutMePage = ({aboutMeDTO}:AboutMePageProps) => {
  const theme = useTheme()

  return (
    <PageLayout title={"About Me"}>
      <ContentBox>
        {aboutMeDTO.map((sentence)=>(
            <Typography key={sentence} p={2} variant={"h6"} fontWeight={"bolder"} color={theme.palette.primary.main}>{sentence}</Typography>
          )
        )}
      </ContentBox>
    </PageLayout>
  );
};

export default AboutMePage;
