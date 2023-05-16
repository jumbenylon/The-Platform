import React, { useRef } from 'react';
import platformVideo from './platform.mp4'

export default function VideoPlayer({ src=platformVideo }) {
  const videoRef = useRef(null);

  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };

  return (
    <div>
      <video ref={videoRef} controls>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button> */}
    </div>
  );
}
