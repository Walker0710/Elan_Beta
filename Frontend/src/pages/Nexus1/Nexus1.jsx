import './Nexus1.css'
import VerticalMarquee from '/src/components/VerticalMarquee/VerticalMarquee.jsx';
import {gsap} from 'gsap';
import {useGSAP} from '@gsap/react';
import {useEffect, useRef, useState} from 'react';
import {Helmet} from 'react-helmet';
import img1 from '/src/assets/nexus_gallery/img1.jpeg'
import img2 from '/src/assets/nexus_gallery/img2.jpeg'
import img3 from '/src/assets/nexus_gallery/img3.jpeg'
import img4 from '/src/assets/nexus_gallery/img4.jpeg'
import img5 from '/src/assets/nexus_gallery/img5.jpg'
import img11 from '/src/assets/nexus_gallery/img11.jpeg'
import img12 from '/src/assets/nexus_gallery/img12.jpeg'
import img8 from '/src/assets/nexus_gallery/img8.jpeg'
import img9 from '/src/assets/nexus_gallery/img9.jpeg'
import img10 from '/src/assets/nexus_gallery/img10.jpeg'
import img13 from '/src/assets/nexus_gallery/img13.jpg'
import img14 from '/src/assets/nexus_gallery/img14.jpg'
import img15 from '/src/assets/nexus_gallery/img15.jpg'
import img16 from '/src/assets/nexus_gallery/img16.jpg'

function Nexus1(){
    return(
       <>
         <Helmet>
            <title>ELan&nVision | Nexus </title>
         </Helmet>
         <VerticalMarquee/>
         <div className='nexus1-container'>
            <div className='nexus1-title'>Nexus Events</div>
            <div className='events-container'>
                <div className='event event1'></div>
                <div className='event event2'></div>
                <div className='event event3'></div>
                <div className='event event4'></div>
            </div>
            <div className='gallery-container'>
              <div className='gallery1-title'>Gallery</div>
              <div className='gallery1'>
                <div className='gitem g1'><img src={img1} className='image'/></div>
                <div className='gitem g2'><img src={img2} className='image'/></div>
                <div className='gitem g3'><img src={img3} className='image'/></div>
                <div className='gitem g4'><img src={img4} className='image'/></div>
                <div className='gitem g5'><img src={img5} className='image'/></div>
                <div className='gitem g8'><img src={img8} className='image'/></div>
                <div className='gitem g9'><img src={img9} className='image'/></div>
                <div className='gitem g10'><img src={img10} className='image'/></div>
                <div className='gitem g11'><img src={img11} className='image'/></div>
                <div className='gitem g12'><img src={img12} className='image'/></div>
                <div className='gitem g13'><img src={img13} className='image'/></div>
                <div className='gitem g14'><img src={img14} className='image'/></div>
                <div className='gitem g15'><img src={img15} className='image'/></div>
                <div className='gitem g16'><img src={img16} className='image'/></div>
              </div>
            </div>
         </div>
         
       </>
    );
}
export default Nexus1;