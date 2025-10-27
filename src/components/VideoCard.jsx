import React from 'react'
import { Link} from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoThumbnailUrl, demoChannelUrl, demoChannelTitle,demoVideoUrl, demoVideoTitle } from '../utils/constants';


const VideoCard = ({ video: { id: { VideoId }, snippet }}) => {
  return (
    <Card
    
        sx={{borderRadius: 4, marginRight:1, border:'none', width:{ md: '300px', xs: '100'}, boxShadow:'none'} }>
        <Link to={VideoId ? `/video/${VideoId}` : demoVideoUrl }>

            <CardMedia
                image={snippet?.thumbnails?.high?.url}
                alt={snippet?.title}
                sx={{ width: 300, height: 180 }}/>
        </Link>
       <CardContent sx={{ backgroundColor: '#1e1e1e', height: '80px' }}>
            <Link to={VideoId ? `/video/${VideoId}` : demoVideoUrl}
            style={{ 
          textDecoration: 'none' }}>
            
                <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
                {snippet?.title?.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                </Typography>
            </Link>

            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}
            style={{ textDecoration: 'none' }}>
                <Typography variant="subtitle2" color="gray">
                {snippet?.channelTitle || demoChannelTitle}
                <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
                </Typography>
            </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard