import './Competitions.css';
import VerticalMarquee from '/src/components/VerticalMarquee/VerticalMarquee.jsx';
import {gsap} from 'gsap';
import {useEffect, useRef} from 'react';
import {cultural_competitions} from '/src/data/competition_cultural.js';
import {tech_competitions} from '/src/data/competition_tech.js';
import culti1 from '/src/assets/comp_desc_imgs/culti1.jpg';
import culti2 from '/src/assets/comp_desc_imgs/culti2.jpg';
import culti3 from '/src/assets/comp_desc_imgs/culti3.jpg';
import tech1 from '/src/assets/comp_desc_imgs/tech1.jpg';
import tech2 from '/src/assets/comp_desc_imgs/tech2.jpg';
import tech3 from '/src/assets/comp_desc_imgs/tech3.jpg';


function Competitions() {
  const imgPlaceholderRef = useRef(null);
  const compImgRef = useRef(null);
  const cultiTab = document.getElementById('culti-tab');
  const techyTab = document.getElementById('techy-tab');
  const cultiCont = document.getElementById('culti-cont');
  const techyCont = document.getElementById('techy-cont');

  function handleCultiTab() {
    cultiTab.classList.add('selected-tab');
    techyTab.classList.remove('selected-tab');
    techyCont.style.display = 'none';
    cultiCont.style.display = 'block';
  }

  function handleTechyTab() {
    cultiTab.classList.remove('selected-tab');
    techyTab.classList.add('selected-tab');
    cultiCont.style.display = 'none';
    techyCont.style.display = 'block';
  }

  function onLeave() {
    imgPlaceholderRef.current.style.opacity = 0;
  }

  function onCardEnter(image) {
    if (screen.orientation.type === 'landscape-primary') {
      compImgRef.current.src = image;
      imgPlaceholderRef.current.style.opacity = 1;
    }
  }

  useEffect(() => {
    function setPosition(e) {
      let del = ((e.clientX / screen.width) * 30) + 50;
      gsap.to(imgPlaceholderRef.current, {
        x: `${del}vw`,
        y: e.clientY - imgPlaceholderRef.current.offsetHeight / 2,
        duration: 1,
        ease: 'power3.out'
      });
    }

    document.addEventListener('mousemove', setPosition);
    return (() => {
      document.removeEventListener('mousemove', setPosition);
    });
  }, []);

  function onDescImgHover(image) {
    compImgRef.current.src = image;
    imgPlaceholderRef.current.style.opacity = 1;
  }

  return (
    <>
      <VerticalMarquee/>
      <div className='competitions'>
        <div className='competitions-title'>Competitions</div>
        <div className='culti-title'>Culti</div>
        <div className='culti-desc'>
          Welcome to the Culti Competitions,

          <span className='mobile-hide'>&nbsp;
            <img src={culti1} alt=''
                 onMouseEnter={() => onDescImgHover(culti1)}
                 onMouseLeave={onLeave}/>
            &nbsp;</span>

          where diversity and creativity intersect in a series of dynamic events. These competitions showcase

          <span className='mobile-hide'>&nbsp;
            <img src={culti2} alt=''
                 onMouseEnter={() => onDescImgHover(culti2)}
                 onMouseLeave={onLeave}/>
            &nbsp;</span>

          the rich cultural tapestry and diverse talents of our community. Join us

          <span className='mobile-hide'>&nbsp;
            <img src={culti3} alt=''
                 onMouseEnter={() => onDescImgHover(culti3)}
                 onMouseLeave={onLeave}/>
            &nbsp;</span>

          as we celebrate heritage, passion, and artistic excellence through engaging competitions highlighting our
          participants&apos; unique contributions.
        </div>
        <div className='techy-title'>Techy</div>
        <div className='techy-desc'>
          Prepare to push the boundaries

          <span className='mobile-hide'>&nbsp;
            <img src={tech1} alt=''
                 onMouseEnter={() => onDescImgHover(tech1)}
                 onMouseLeave={onLeave}/>
            &nbsp;</span>

          of your skills and creativity as you dive into a diverse
          array of challenges. From rapid-fire coding battles and cryptographic puzzles to game
          development sprints and drone engineering, these contests will test your
          problem-solving prowess, technical expertise, and ability to think outside the box.<br/>
          Get ready

          <span className='mobile-hide'>&nbsp;
            <img src={tech2} alt=''
                 onMouseEnter={() => onDescImgHover(tech2)}
                 onMouseLeave={onLeave}/>
            &nbsp;</span>

          to collaborate, compete, and create as you tackle real-world problems and explore

          <span className='mobile-hide'>&nbsp;
            <img src={tech3} alt=''
                 onMouseEnter={() => onDescImgHover(tech3)}
                 onMouseLeave={onLeave}/>
            &nbsp;</span>

          the frontiers of technology. Choose your arena and let the innovation begin!
        </div>

        <div className='tab'>
          <div id='culti-tab' className='selected-tab' onClick={handleCultiTab}>CULTI</div>
          <span>/</span>
          <div id='techy-tab' className='' onClick={handleTechyTab}>TECHY</div>
        </div>
        <div className='competition-note'></div>
        <div className='competitions-cont'>
          <div id='culti-cont' onMouseLeave={onLeave}>
            {
              cultural_competitions.map((competition, index) => (
                <div className='competition-card culti-card' key={index}
                     onMouseEnter={() => onCardEnter(competition.image)}>
                  <div className='competition-name'>{competition.name}&nbsp;
                  </div>
                  <div className='competition-description'>
                    {competition.description}
                  </div>
                </div>
              ))
            }
          </div>

          <div id='techy-cont' onMouseLeave={onLeave}>
            {
              tech_competitions.map((competition, index) => (
                <div className='competition-card techy-card' key={index}
                     onMouseEnter={() => onCardEnter(competition.image)}>
                  <div className='competition-name'>{competition.name}&nbsp;
                  </div>
                  <div className='competition-description'>
                    {competition.description}
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div id='image-placeholder' ref={imgPlaceholderRef} className='mobile-hide'>
          <img src='' alt='' ref={compImgRef}/>
        </div>
      </div>
    </>
  );
}

export default Competitions;