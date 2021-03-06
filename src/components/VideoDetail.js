import React from 'react';

const VideoPlayer = (props) => {
  const video=props.video;
  if (!video) {
    return <div>Loading video player...</div>;
  }
  const videoId = video.id.videoId;
  const url = `https://youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      {/* this will print the titlle and descrtiopt of video being played */}
      <div className="details">
        <div>{video.snippet.title}</div>
        {/* <div>{video.snippet.description}</div> */}
      </div>
    </div>
  );
}

export default VideoPlayer;