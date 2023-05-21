"use client"

import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'
import CardList from '../CardList/CardList'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import LatestPost from '../LatestPost/LatestPost';


export default function PostContainer({posts}) {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
      

  return (

    <React.Fragment>

      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>


<Grid container>
  <Grid item sm={12} lg={12}>
    <Item><CardList posts={posts}/></Item>
  </Grid>
  {/* <Grid item sm={12} lg={4}>
    <Item><LatestPost/></Item>
  </Grid> */}
  
</Grid>
      </Box>
    </React.Fragment>
  );
}

