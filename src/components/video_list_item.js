import React from 'react';

const VideoListItem = ({video, onVideoSelected}) => {
  //console.log(video);
  const imageURL = video.snippet.thumbnails.default.url
  // const video = props.video;

  return (
    <li onClick={() => onVideoSelected(video)} className="list-group-item" id={video.id.videoId}>
        <div className="video-list media">
          <div className="media-left">
            <img className="media-object"  src={imageURL} />
          </div>

          <div className="media-body">
            <div className="media-heading">
              {video.snippet.title}
            </div>
          </div>
        </div>


    </li>
  );
};

export default VideoListItem;
