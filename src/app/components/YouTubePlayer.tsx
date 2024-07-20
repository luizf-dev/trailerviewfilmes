'use client';

import React from 'react';
import YouTube from 'react-youtube';

interface YouTubePlayerProps{
    videoId: string
}

const YouTubePlayer = ({ videoId }: YouTubePlayerProps) => {
    return(
        <div className='youtube-container'>
            <YouTube videoId={videoId} />
        </div>
    ); 
   
};

export default YouTubePlayer;
