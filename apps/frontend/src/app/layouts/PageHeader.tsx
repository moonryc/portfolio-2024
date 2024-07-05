import React from 'react';
import { Typography, useTheme } from '@mui/material';

type PageHeaderProps = {
  title: string;
}

const PageHeader = ({title}: PageHeaderProps) => {
  const theme = useTheme()
  return (
    <Typography p={2} variant={"h3"}  textTransform={"uppercase"} color={theme.palette.primary.main} bgcolor={theme.palette.secondary.light}>{title}</Typography>
  );
};

export default PageHeader;
