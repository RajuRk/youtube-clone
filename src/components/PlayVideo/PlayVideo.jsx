import './playvideo.css';
import video1 from '../../assets/video.mp4';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import jack from '../../assets/jack.png';
import user_profile from '../../assets/user_profile.jpg';

export default function PlayVideo() {
  return (
    <div className='play-video'>
      <video src={video1} controls autoplay muted></video>
      <h3>Best Youtube Channel To Learn Web Development</h3>
      <div className='play-video-info'>
        <p>1525 Views &bull; 2 days ago</p>
        <div>
          <span>
            <img src={like} alt='' /> 125
          </span>
          <span>
            <img src={dislike} alt='' /> 2
          </span>
          <span>
            <img src={share} alt='' /> Share
          </span>
          <span>
            <img src={save} alt='' /> Save
          </span>
        </div>
      </div>
      <hr />
      <div className='publisher'>
        <img src={jack} alt='' />
        <div>
          <p>GreatStack</p>
          <span>1M Subscriber</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className='vid-description'>
        <p>Channel that makes learning Easy</p>
        <p>Subscribe Greatstack to watch more tutorials on web Development</p>
        <hr />
        <h4>130 Comments</h4>
        <div className='comments'>
          <img src={user_profile} alt='' />
          <div>
            <h3>
              Jack Nicholson <span>1 day ago</span>
            </h3>
            <p>
              A global computer network providing a variety of information and
              cc of interconnected networks using standardized communication
              protocols
            </p>
            <div className='comment-action'>
              <img src={like} alt='' />
              <span>244</span>
              <img src={dislike} alt='' />
            </div>
          </div>
        </div>
        <div className='comments'>
          <img src={user_profile} alt='' />
          <div>
            <h3>
              Jack Nicholson <span>1 day ago</span>
            </h3>
            <p>
              A global computer network providing a variety of information and
              cc of interconnected networks using standardized communication
              protocols
            </p>
            <div className='comment-action'>
              <img src={like} alt='' />
              <span>244</span>
              <img src={dislike} alt='' />
            </div>
          </div>
        </div>
        <div className='comments'>
          <img src={user_profile} alt='' />
          <div>
            <h3>
              Jack Nicholson <span>1 day ago</span>
            </h3>
            <p>
              A global computer network providing a variety of information and
              cc of interconnected networks using standardized communication
              protocols
            </p>
            <div className='comment-action'>
              <img src={like} alt='' />
              <span>244</span>
              <img src={dislike} alt='' />
            </div>
          </div>
        </div>
        <div className='comments'>
          <img src={user_profile} alt='' />
          <div>
            <h3>
              Jack Nicholson <span>1 day ago</span>
            </h3>
            <p>
              A global computer network providing a variety of information and
              cc of interconnected networks using standardized communication
              protocols
            </p>
            <div className='comment-action'>
              <img src={like} alt='' />
              <span>244</span>
              <img src={dislike} alt='' />
            </div>
          </div>
        </div>
        <div className='comments'>
          <img src={user_profile} alt='' />
          <div>
            <h3>
              Jack Nicholson <span>1 day ago</span>
            </h3>
            <p>
              A global computer network providing a variety of information and
              cc of interconnected networks using standardized communication
              protocols
            </p>
            <div className='comment-action'>
              <img src={like} alt='' />
              <span>244</span>
              <img src={dislike} alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
