import { PersonalQuery } from '../hooks/usePersonalQuery';
import { Box, Stack, Typography, useTheme } from '@mui/material';
import { useCallback, useMemo } from 'react';
import PageLayout from './PageLayout';
import { contactInfo } from '../../../../backend/src/app/personal/personal.data';
import Button from '../shared/ui/ListItem/Button';
import { noop } from 'lodash';

type ContactPageProps = {
  contactDTO: PersonalQuery["contactMe"]
}

type ContactMeItemProps = {
  iconNameForURL: string;
  contactURL: string;
  isEmail: boolean;
}

const ContactMeItem = ({iconNameForURL, contactURL, isEmail}:ContactMeItemProps) =>{

  const handleOnClick = useCallback(()=>{
    if(isEmail){
      window.location.href = `mailto:${contactURL}`
      return
    }
    window.open(contactURL, "_blank")
  },[])

  return (
    <Button
      value={iconNameForURL.toUpperCase()}
      onClick={handleOnClick}
      customIcon={<img src={`http://localhost:3000/${iconNameForURL}.svg`} alt={iconNameForURL}
                       style={{ filter: 'grayscale(100%) sepia(100%) contrast(50%)' }} />}
    />
  )
}

const ContactPage = ({contactDTO}: ContactPageProps) => {

  const contactPoints = useMemo<ContactMeItemProps[]>(() => {
    const fields = Object.keys(contactDTO) as (keyof typeof contactDTO)[]
    return fields.map((field)=>{
      const regex = /email/i
      const isEmail = regex.test(field)
      return { iconNameForURL: field, contactURL: contactDTO[field], isEmail }
    })
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
