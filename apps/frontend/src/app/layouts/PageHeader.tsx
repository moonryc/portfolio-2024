import React, { useMemo } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import GridViewSharpIcon from '@mui/icons-material/GridViewSharp';

type PageHeaderProps = {
  title: string;
}

const PageHeader = ({title}: PageHeaderProps) => {
  const theme = useTheme()

  const divider = useMemo(() => {
    return <Box height={'4px'} width={'100%'} bgcolor={theme.palette.primary.main} />;
  }, [theme.palette.primary.main]);

  return (

  <Box
    boxShadow={"5px 5px 10px black"}
    sx={{
      background: theme.palette.secondary.light,
      py: '5px'
    }}>
    {divider}
    <Box display={'flex'} alignItems={'center'} pl={'1rem'}>
      <GridViewSharpIcon color={"primary"} sx={{ transform: `rotate(45deg)`}} />
      <Typography p={1} variant={"h5"} fontWeight={"bold"} textTransform={"uppercase"} color={theme.palette.primary.main} bgcolor={theme.palette.secondary.light}>{title}</Typography>
    </Box>
    {divider}
  </Box>
  );
};

export default PageHeader;
