import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {  //destructuring

    // loop over the videos arrat and return a VideoItem comp for each search result
    const renderedList = videos.map((video) => {
        return <VideoItem video={video} onVideoSelect={onVideoSelect} key={video.id.videoId} />
    });

    return (
        <div className="ui relaxed divided list">
            {renderedList}

        </div>
    );
};

export default VideoList;
