import { Box, Stack, Typography, useTheme } from '@mui/material';
import { TypeAnimation } from 'react-type-animation';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../../routes/routes';

const titles: (string | number)[] = [
  'Developer',
  1000,
  'problem solver',
  1000,
  'Designer',
  1000,
  'Form expert',
  1000,
  'Engineer'
];

const Name = () => {
  const theme = useTheme();
  const navigate = useNavigate()

  const handleOnNameClick = useCallback(()=>navigate(routes.homePage.path),[navigate])

  return (
    <Box display={'flex'}>
      <Stack >
        <Typography onClick={handleOnNameClick} sx={{cursor: "pointer",}} variant={'h2'} color={theme.palette.secondary.light} >
          <TypeAnimation
            cursor={false}
            sequence={['Ryan Moon']}
            speed={{ type: 'keyStrokeDelayInMs', value: 80 }}
            repeat={0}
          />
        </Typography>
        <Typography
          variant={'h4'}
          textTransform={'uppercase'}
          color={theme.palette.secondary.light}>
          <TypeAnimation
            sequence={titles}
            speed={{ type: 'keyStrokeDelayInMs', value: 100 }}
            repeat={Infinity}
          />
        </Typography>
      </Stack>
    </Box>
  );
};

export default Name;
