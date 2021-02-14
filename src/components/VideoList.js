import React from 'react';
import VideoItem from './VideoItem';

// eslint-disable-next-line react/prop-types
const VideoList = ( {videos, onVideoSelect }) => {
    // eslint-disable-next-line react/prop-types
    const renderedList = videos.map((video) => {
        // eslint-disable-next-line react/jsx-key
        return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video}/>;
    });

    return <div className='ui relaxed divided list'>{renderedList}</div>
}

export default VideoList;
