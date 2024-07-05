import { Grid } from '@mui/material';
import React, { PropsWithChildren } from 'react';
import PageHeader from './PageHeader';

type PageLayoutProps = {
  title: string;
}

const PageLayout = ({title, children}:PropsWithChildren<PageLayoutProps> ) => {
  return (
    <Grid container justifyContent={"center"} spacing={2} width={"80%"}>
      <Grid item xs={12}>
        <PageHeader title={title}/>
      </Grid>
      <Grid item xs={12} justifyContent={"center"}>
        {children}
      </Grid>
    </Grid>
  );
};

export default PageLayout;
