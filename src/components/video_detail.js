import React from 'react';

const VideoDetail = ({video}) =>{
  if (!video){
    return <div>Loading video</div>
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return(
    <div className="video-details col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <h3 className="title">{video.snippet.title}</h3>
        <p className="subtitle">{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
