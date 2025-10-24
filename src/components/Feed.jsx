import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { Sidebar, Videos } from './'

const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}> 
    <Box sx={{height: { sx: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 }}}>
      <Sidebar/>
      <Typography variant='body2' fontWeight='bold' mb={2} sx={{ color: 'white' }}>
        Feed
      </Typography>
    </Box>
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
    <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: 'white' }}>
        New<span 
          style={{
            color: 'red',
            marginLeft: '7px'
          }}
        >
          Vídeos 
        </span>
      </Typography>
      <Videos videos={[]} />
    </Box>
    </Stack>
  )
}

export default Feed