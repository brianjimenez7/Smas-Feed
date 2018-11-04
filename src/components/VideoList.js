import React from 'react';
import VideoItem from './VideoItem'

const VideoList = (props) => {
  
  const videoItems = props.videos.map((video) => {
    return (
        <VideoItem
            onUserSelected={props.onVideoSelected}
            key={video.etag}
            video={video}/>
    );
  });

  return (
      <div className="col-sm-4">
          <ul className="list-group">
      { videoItems }
    </ul>
      </div>
  );
}

export default VideoList;