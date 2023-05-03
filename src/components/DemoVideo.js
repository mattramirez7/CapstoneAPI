import '../style/DemoVideo.css'
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player'
import DemoButton from './DemoButton'



function DemoVideo() {
  const [shown, setShown] = useState(false);

  useEffect (() => {
    const problemBox = document.querySelector('.problem-box');
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setShown(true);
          problemBox.classList.add('problem-box--visible');
        }
      });
    }, options);


    observer.observe(problemBox);

    return () => observer.observe(problemBox);
  }, []);
    return (
      <div className={`demo-box${shown ? ' demo-box--visible':''}`}>
        <div className="demo-inner-box">
            <h3 className='demo-heading'>Demo Video</h3>
            <h4 className='demo-sub-heading'>Watch The Magic Of Finding Products</h4>
            <div className='demo-video-container'>
          <div className='demo-video-container-inner'>
              <ReactPlayer
              url="https://www.youtube.com/watch?v=R7Q83rbltjw&ab_channel=ChrisGu"
              playing={false}
              />
          </div>
          <p>To demonstrate the capabilities of our API, we have provided a user interface that allows direct interaction with it. If you're interested in trying it out, simply click button below</p>
          <div className='button-container'>
            <DemoButton/>
          </div>
        </div> 
      </div>
      </div>
    );
  }
  export default DemoVideo;