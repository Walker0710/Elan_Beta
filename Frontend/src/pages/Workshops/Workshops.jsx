import './Workshops.css';
import VerticalMarquee from '/src/components/VerticalMarquee/VerticalMarquee.jsx';
import robotics_poster from '/src/assets/workshops_posters/robotics_poster.png';
import full_stack_poster from '/src/assets/workshops_posters/full_stack_poster.png';
import eth_hack_poster from '/src/assets/workshops_posters/eth_hack_poster.png';
import gen_ai_poster from '/src/assets/workshops_posters/gen_ai_poster.png';
import {Link} from 'react-router-dom';


function Workshops() {
  return (
    <>
      <VerticalMarquee/>
      <div className='workshops'>
        <div className='workshop-title'>Workshops</div>
        <div className='workshop-description'>
          Workshops are intended for hands-on experiential learning in coming-of-age topics like
          cybersecurity and generative AI. They are designed and planned in such a way that
          they improve student’s critical thinking skills along with the technical takeaways. But
          that&apos;s not all, we believe a good break makes learning easier and one more focused,
          which is why we have a whole set of numerous games set up for the participants during
          the break and a catch-up session with the students of IIT-Hyderabad at the end of the
          workshops.<br/>
          Is distance and time taken to reach our campus the one last thing stopping you from
          attending our amazing workshops? Well, don&apos;t worry because we got you covered there
          too! We arrange in-campus accommodation during the workshops for participants at
          extremely affordable costs. Stay overnight in our campus and experience life at an IIT.
          There are also transport services arranged for your ease on both the days of the
          workshop from in-demand stops in the city to our campus at economical prices. So
          what&apos;s stopping you from attending these workshops! Take a look at the next scheduled
          workshop below and fix your spot!
        </div>

        <div className='accomodation-link'>
          <Link to='/accommodation'>
            Get accomodations &#8599;
          </Link>
        </div>

        <div className='workshop-tiles'>
          <div className='workshop-tile'>
            <div className='workshop-tile-poster'>
              <img src={robotics_poster} alt=''/>
            </div>
            <div className='workshop-tile-title'>
              <a
                href='https://unstop.com/p/robotics-technical-workshop-elan-ivision-2025-iit-hyderabad-1139085'
                rel='noopener noreferrer'
                target='_blank'
                className='underline-white'>
                Register for workshop&#8599;
              </a>
            </div>
          </div>
          
          <div className='workshop-tile'>
            <div className='workshop-tile-poster'>
              <img src={full_stack_poster} alt=''/>
            </div>
            <div className='workshop-tile-title'>
              <a
                href='https://unstop.com/workshops-webinars/full-stack-development-bootcamp-iit-hyderabad-1139112'
                rel='noopener noreferrer'
                target='_blank'
                className='underline-white'>
                Register for workshop&#8599;
              </a>
            </div>
          </div>
          <div className='workshop-tile'>
            <div className='workshop-tile-poster'>
              <img src={eth_hack_poster} alt=''/>
            </div>
            <div className='workshop-tile-title'>
              <a
                href='https://unstop.com/p/ethical-hacking-technical-workshop-elan-ivision-2025-iit-hyderabad-1139214'
                rel='noopener noreferrer'
                target='_blank'
                className='underline-white'>
                Register for workshop&#8599;
              </a>
            </div>
          </div>
          <div className='workshop-tile'>
            <div className='workshop-tile-poster'>
              <img src={gen_ai_poster} alt=''/>
            </div>
            <div className='workshop-tile-title'>
              <a
                href='https://unstop.com/p/generative-ai-and-chatgpt-workshop-iit-hyderabad-1139108'
                rel='noopener noreferrer'
                target='_blank'
                className='underline-white'>
                Register for workshop&#8599;
              </a>
            </div>
          </div>
        </div>


      </div>
    </>
  );
}

export default Workshops;