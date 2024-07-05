import { PersonalQuery } from '../hooks/usePersonalQuery';
import { Box, Stack, Typography, useTheme } from '@mui/material';
import { useMemo } from 'react';
import PageLayout from './PageLayout';

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
    <Box p={"2rem"} bgcolor={theme.palette.secondary.light} display={"flex"} gap={2}>
      <a href={contactURL} target={"_blank"} rel={"noreferrer"}>
        <img src={`http://localhost:3000/${iconNameForURL}.svg`} alt={iconNameForURL}/>
        <Typography  textTransform={"uppercase"}>{iconNameForURL}</Typography>
      </a>
    </Box>
  )
}

const ContactPage = ({contactDTO}: ContactPageProps) => {
  const theme = useTheme()

  const contactPoints = useMemo<ContactMeItemProps[]>(() => {
    const fields = Object.keys(contactDTO) as (keyof typeof contactDTO)[]
    return fields.map((field)=>({ iconNameForURL: field, contactURL: contactDTO[field]}))
  }, [contactDTO]);

  return (
    <PageLayout title={"contact me"}>
      <Stack minWidth={"80%"} gap={2} justifyContent={"center"}>
        {contactPoints.map((cp)=><ContactMeItem key={cp.iconNameForURL} {...cp}/>)}
      </Stack>
    </PageLayout>
  );
};

export default ContactPage;
