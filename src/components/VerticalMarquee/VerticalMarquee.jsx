import {useEffect} from 'react';
import './VerticalMarquee.css';

function VerticalMarquee() {
  useEffect(() => {
    function move() {
      const marquee = document.querySelector('.marquee');
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
      <div className='marquee-container' id='marquee-container'>
        <div className='marquee' id='marquee'>
          <span className='marquee-text'>Elan & <span className='marquee-eta'>&eta;</span>Vision</span>
          <span className='marquee-star'>&#10022;</span>
          <span className='marquee-text'>Elan & <span className='marquee-eta'>&eta;</span>Vision</span>
          <span className='marquee-star'>&#10022;</span>
          <span className='marquee-text'>Elan & <span className='marquee-eta'>&eta;</span>Vision</span>
          <span className='marquee-star'>&#10022;</span>
          <span className='marquee-text'>Elan & <span className='marquee-eta'>&eta;</span>Vision</span>
          <span className='marquee-star'>&#10022;</span>
          <span className='marquee-text'>Elan & <span className='marquee-eta'>&eta;</span>Vision</span>
          <span className='marquee-star'>&#10022;</span>
          <span className='marquee-text'>Elan & <span className='marquee-eta'>&eta;</span>Vision</span>
          <span className='marquee-star'>&#10022;</span>
          <span className='marquee-text'>Elan & <span className='marquee-eta'>&eta;</span>Vision</span>
          <span className='marquee-star'>&#10022;</span>
          <span className='marquee-text'>Elan & <span className='marquee-eta'>&eta;</span>Vision</span>
          <span className='marquee-star'>&#10022;</span>
          <span className='marquee-text'>Elan & <span className='marquee-eta'>&eta;</span>Vision</span>
          <span className='marquee-star'>&#10022;</span>
          <span className='marquee-text'>Elan & <span className='marquee-eta'>&eta;</span>Vision</span>
          <span className='marquee-star'>&#10022;</span>
          <span className='marquee-text'>Elan & <span className='marquee-eta'>&eta;</span>Vision</span>
          <span className='marquee-star'>&#10022;</span>
          <span className='marquee-text'>Elan & <span className='marquee-eta'>&eta;</span>Vision</span>
          <span className='marquee-star'>&#10022;</span>
          <span className='marquee-text'>Elan & <span className='marquee-eta'>&eta;</span>Vision</span>
          <span className='marquee-star'>&#10022;</span>
          <span className='marquee-text'>Elan & <span className='marquee-eta'>&eta;</span>Vision</span>
          <span className='marquee-star'>&#10022;</span>
          <span className='marquee-text'>Elan & <span className='marquee-eta'>&eta;</span>Vision</span>
          <span className='marquee-star'>&#10022;</span>
          <span className='marquee-text'>Elan & <span className='marquee-eta'>&eta;</span>Vision</span>
          <span className='marquee-star'>&#10022;</span>
          <span className='marquee-text'>Elan & <span className='marquee-eta'>&eta;</span>Vision</span>
          <span className='marquee-star'>&#10022;</span>
          <span className='marquee-text'>Elan & <span className='marquee-eta'>&eta;</span>Vision</span>
          <span className='marquee-star'>&#10022;</span>
          <span className='marquee-text'>Elan & <span className='marquee-eta'>&eta;</span>Vision</span>
          <span className='marquee-star'>&#10022;</span>
          <span className='marquee-text'>Elan & <span className='marquee-eta'>&eta;</span>Vision</span>
          <span className='marquee-star'>&#10022;</span>
          <span className='marquee-text'>Elan & <span className='marquee-eta'>&eta;</span>Vision</span>
          <span className='marquee-star'>&#10022;</span>
          <span className='marquee-text'>Elan & <span className='marquee-eta'>&eta;</span>Vision</span>
          <span className='marquee-star'>&#10022;</span>
          <span className='marquee-text'>Elan & <span className='marquee-eta'>&eta;</span>Vision</span>
          <span className='marquee-star'>&#10022;</span>
          <span className='marquee-text'>Elan & <span className='marquee-eta'>&eta;</span>Vision</span>
          <span className='marquee-star'>&#10022;</span>
          <span className='marquee-text'>Elan & <span className='marquee-eta'>&eta;</span>Vision</span>
          <span className='marquee-star'>&#10022;</span>
          <span className='marquee-text'>Elan & <span className='marquee-eta'>&eta;</span>Vision</span>
          <span className='marquee-star'>&#10022;</span>
          <span className='marquee-text'>Elan & <span className='marquee-eta'>&eta;</span>Vision</span>
          <span className='marquee-star'>&#10022;</span>
          <span className='marquee-text'>Elan & <span className='marquee-eta'>&eta;</span>Vision</span>
          <span className='marquee-star'>&#10022;</span>
          <span className='marquee-text'>Elan & <span className='marquee-eta'>&eta;</span>Vision</span>
          <span className='marquee-star'>&#10022;</span>
          <span className='marquee-text'>Elan & <span className='marquee-eta'>&eta;</span>Vision</span>
          <span className='marquee-star'>&#10022;</span>
          <span className='marquee-text'>Elan & <span className='marquee-eta'>&eta;</span>Vision</span>
          <span className='marquee-star'>&#10022;</span>
          <span className='marquee-text'>Elan & <span className='marquee-eta'>&eta;</span>Vision</span>
          <span className='marquee-star'>&#10022;</span>
          <span className='marquee-text'>Elan & <span className='marquee-eta'>&eta;</span>Vision</span>
          <span className='marquee-star'>&#10022;</span>
          <span className='marquee-text'>Elan & <span className='marquee-eta'>&eta;</span>Vision</span>
          <span className='marquee-star'>&#10022;</span>
          <span className='marquee-text'>Elan & <span className='marquee-eta'>&eta;</span>Vision</span>
          <span className='marquee-star'>&#10022;</span>
          <span className='marquee-text'>Elan & <span className='marquee-eta'>&eta;</span>Vision</span>
          <span className='marquee-star'>&#10022;</span>
          <span className='marquee-text'>Elan & <span className='marquee-eta'>&eta;</span>Vision</span>
          <span className='marquee-star'>&#10022;</span>
        </div>
      </div>
    </>
  );
}

export default VerticalMarquee;