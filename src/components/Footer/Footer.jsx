import './Footer.css';
import {Link} from 'react-router-dom';

function Footer() {
  return (
    <>
      <div className='footer' id='footer'>
        <div className='upper-footer'>
          <span className='heading'>SEND US A MAIL</span>
          <span className='mail' id='mail'>
            <a href='mailto:elan@iith.ac.in' rel='noopener noreferrer'>ELAN@IITH.AC.IN</a>
          </span>
        </div>
        <div className='middle-footer'>
          <div className='contact-poc'>
            <div className='heading poc-heading'>CONTACT US</div>
            <div className='poc'>
              <div className='poc-inner'>
                <span className='poc-name'>Mehul Srivastava</span>
                <span>Overall Head</span>
                <span>+91 63952 63137</span>
              </div>
              <div className='poc-inner'>
                <span className='poc-name'>Vighnesh Sreepathi</span>
                <span>Vice Overall Head</span>
                <span>+91 81214 62682</span>
              </div>
              <div className='poc-inner'>
                <span className='poc-name'>Dhruv Sharma</span>
                <span>Head of Public Relations</span>
                <span>+91 77027 36060</span>
              </div>
              <div className='poc-inner'>
                <span className='poc-name'>Ananya S Reddy</span>
                <span>Head of Public Relations</span>
                <span>+91 63040 56873</span>
              </div>
            </div>
          </div>

          <div className='contact-socials'>
            <div className='heading socials-heading'>SOCIALS</div>
            <div className='social-link link-red'><Link target={'_blank'}
                                                        to='https://www.instagram.com/elan_nvision.iith'>INSTAGRAM</Link>
            </div>
            <div className='social-link link-green'><Link target={'_blank'}
                                                          to='https://x.com/elan_nvision'>TWITTER</Link></div>
            <div className='social-link link-yellow'><Link target={'_blank'}
                                                           to='https://www.facebook.com/elannvision.iithyderabad/'>FACEBOOK</Link>
            </div>
            <div className='social-link link-orange'><Link target={'_blank'}
                                                           to='https://www.linkedin.com/company/elan-nvision-iith/'>LINKEDIN</Link>
            </div>
          </div>
        </div>
        <div className='bottom-footer'></div>
      </div>
    </>
  );
}

export default Footer;