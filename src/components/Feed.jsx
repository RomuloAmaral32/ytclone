import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'

const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}> 
    <Box sx={{height: { sx: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 }}}>
      SideBar
      <Typography variant='body2' fontWeight='bold' mb={2} sx={{ color: 'white' }}>
        Feed
      </Typography>
    </Box>
    //min 40 
    </Stack>
  )
}

export default Feed