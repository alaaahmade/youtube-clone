import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';


import { FetchFromAPI } from '../utils/FitchFromApi';
import { ChannelCard, Videos } from './';

function ChanelDetail() {

  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos ] = useState([])

  const { id }  = useParams();

  useEffect(() => {
    FetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]));

      FetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items));
  }, [id])
  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{
          background:' linear-gradient(90deg, rgba(44,0,75,1) 0%, rgba(80,0,108,1) 0%, rgba(169,0,190,1) 13%, rgba(108,0,134,1) 36%, rgba(0,212,255,1) 100%, rgba(2,0,36,1) 100%)',
          zIndex: 10,
          height: '300px',
        }} />
        <ChannelCard channelDetail={channelDetail} marginTop='-110px' />
      </Box>
      <Box display='flex' p='2'>
        <Box sx={{
          mr: { sm: '100px'}
        }} />
          <Videos videos={videos}/>
          
      </Box>
    </Box>
  )
}

export default ChanelDetail