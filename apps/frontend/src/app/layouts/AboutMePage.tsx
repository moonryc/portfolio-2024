import { Box, Typography, useTheme } from '@mui/material';
import { PersonalQuery } from '../hooks/usePersonalQuery';

type AboutMePageProps = {
  aboutMeDTO: PersonalQuery["aboutMe"]
}

const AboutMePage = ({aboutMeDTO}:AboutMePageProps) => {
  const theme = useTheme()

  return (
    <Box height={"80%"} width={"80%"} bgcolor={theme.palette.secondary.light} >
      <Typography>
      {aboutMeDTO}
      </Typography>

    </Box>
  );
};

export default AboutMePage;
