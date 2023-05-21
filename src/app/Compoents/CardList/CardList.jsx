"use client"
import React from 'react'
import BlogCard from '../Card/index'
import Grid from '@mui/material/Grid/Grid'

export default function CardList({posts}) {
  return (
    <div>
    <Grid container spacing={2}>

{
        posts?.map(data=> (
          <Grid item sm={6} md={6} lg={4} xl={3}>
        <BlogCard/>

          </Grid>
        ))
      }

  </Grid>

    </div>
  )
}
