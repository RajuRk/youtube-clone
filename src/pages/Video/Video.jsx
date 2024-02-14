import React from 'react';
import './video.css';
import PlayVideo from '../../components/PlayVideo/PlayVideo';
import Recommanded from '../../components/Recommanded/Recommanded';

export default function Video() {
  return (
    <div className='play-container'>
      <PlayVideo />
      <Recommanded />
    </div>
  );
}
