import React from 'react';

const VideoItem =({ video }) =>{
    //console.log(props);
    return (
        <div>
            <img  src = {video.snippet.thumbnails.medium.url} />
             { video.snippet.title }
        </div>);
};

export default VideoItem;