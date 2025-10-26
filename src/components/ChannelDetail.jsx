import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react' 
import { Box } from '@mui/material'
import { Videos, ChannelCard } from './'
import { fetchFromApi } from '../utils/fechFromApi'
const ChannelDetail = () => {
 
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
 console.log(channelDetail, videos);
  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]));
    
      fetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items));
  }, [id]);

  return (
    <Box>
      <Box
      minHeight="95vh"
      >
        <div style={{
          height: '300px',
          background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(40, 58, 57, 1) 35%, rgba(39, 41, 41, 1) 100%)',
          zIndex: 10,
          height: '210px'
        }}/>
        <ChannelCard channelDetail={channelDetail} marginTop='-130px'/> 
      </Box>
      <Box display="flex" p="2" marginTop='-310px'>
        <Box sx={{ mr: { sm: '100px' } }}/>
        <Videos videos={videos}/>
      </Box>  
    </Box>
  )
}

export default ChannelDetail