import {useEffect} from 'react';
import './VerticalMarquee.css';

function VerticalMarquee() {
  useEffect(() => {
    function move() {
      const marquee = document.querySelector('.vertical-marquee');
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      marquee.style.transform = `translateY(${scrollTop * 0.5}px)`;
    }
    window.addEventListener('scroll', move);
    return () => {
      window.removeEventListener('scroll', move);
    };
  }, []);

  return (
    <>
      <div className='vertical-marquee-container' id='vertical-marquee-container'>
        <div className='vertical-marquee' id='vertical-marquee'>
          <span className='vertical-marquee-text'>Elan & nVision</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Elan & nVision</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Elan & nVision</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Elan & nVision</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Elan & nVision</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Elan & nVision</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Elan & nVision</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Elan & nVision</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Elan & nVision</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Elan & nVision</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Elan & nVision</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Elan & nVision</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Elan & nVision</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Elan & nVision</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Elan & nVision</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Elan & nVision</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Elan & nVision</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Elan & nVision</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Elan & nVision</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Elan & nVision</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Elan & nVision</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Elan & nVision</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Elan & nVision</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Elan & nVision</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Elan & nVision</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Elan & nVision</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Elan & nVision</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Elan & nVision</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Elan & nVision</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Elan & nVision</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Elan & nVision</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Elan & nVision</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Elan & nVision</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Elan & nVision</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Elan & nVision</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Elan & nVision</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Elan & nVision</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Elan & nVision</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Elan & nVision</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Elan & nVision</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Elan & nVision</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Elan & nVision</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Elan & nVision</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Elan & nVision</span>
          <span className='vertical-marquee-star'>&#10022;</span>

        </div>
      </div>
    </>
  );
}

export default VerticalMarquee;