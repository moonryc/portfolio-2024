import { Grid } from '@mui/material';
import React, { PropsWithChildren } from 'react';
import PageHeader from '../components/PageHeader';

type PageLayoutProps = {
  title: string;
}

const PageLayout = ({title, children}:PropsWithChildren<PageLayoutProps> ) => {
  return (
    <Grid container justifyContent={"center"} spacing={2} width={"80%"}>
      <Grid item xs={12}>
        <PageHeader title={title}/>
      </Grid>
      <Grid item xs={12}>
        {children}
      </Grid>
    </Grid>
  );
};

export default PageLayout;
