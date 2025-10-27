import React from 'react'
import { Box, Stack } from '@mui/material'
import { VideoCard, ChannelCard } from './'
import { Typography } from '@mui/material'

const Videos = ({videos, direction}) => {
  //if(videos?.length) return 'Loading...';
    /*if (!Array.isArray(videos)) {
    return <Typography color="#fff">Carregando...</Typography>
  }*/
  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" gap={2}>
      {videos?.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos