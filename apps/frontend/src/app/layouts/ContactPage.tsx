import { PersonalQuery } from '../hooks/usePersonalQuery';
import { Box, Typography, useTheme } from '@mui/material';

type ContactPageProps = {
  contactDTO: PersonalQuery["contactMe"]
}

type ContactMeItemProps = {

  iconNameForURL: string;
  contactURL: string;
}

const ContactMeItem = ({iconNameForURL, contactURL}:ContactMeItemProps) =>{
  const theme = useTheme()
  return (
    <Box bgcolor={theme.palette.secondary.light} display={"flex"}>
      <Typography>{iconNameForURL}</Typography>
      <img alt={iconNameForURL}/>
    </Box>
  )
}

const ContactPage = ({contactDTO}: ContactPageProps) => {
  const theme = useTheme()

  return (
    <Box bgcolor={theme.palette.secondary.light} display={"flex"}>
      <Typography>CONTACT ME</Typography>
    </Box>
  );
};

export default ContactPage;
