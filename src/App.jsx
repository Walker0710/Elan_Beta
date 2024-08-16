import CustomCursor from '/src/components/CustomCursor/CustomCursor.jsx';
import Footer from '/src/components/Footer/Footer.jsx';
import NavBar from '/src/components/NavBar/NavBar.jsx';
import Accommodation from '/src/pages/Accommodation/Accommodation.jsx';
import Competitions from '/src/pages/Competitions/Competitions.jsx';
import Events from '/src/pages/Events/Events.jsx';
import Home from '/src/pages/Home/Home.jsx';
import SocialCause from '/src/pages/Social Cause/SocialCause.jsx';
import Team from '/src/pages/Team/Team.jsx';
import Workshops from '/src/pages/Workshops/Workshops.jsx';
import {ReactLenis, useLenis} from 'lenis/react';
import {useEffect} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';

function App() {
  const lenis = useLenis(({scroll}) => {
  });

  useEffect(() => {
    if (lenis) {
      lenis.options.lerp = 0.2;
      lenis.options.duration = 0.4;
    }
  }, [lenis]);

  return (
    <ReactLenis root>
      <BrowserRouter>
        <CustomCursor/>
        <Routes>
          <Route exact path='/' element={<>
            <NavBar/>
            <Home/>
            <Footer/>
          </>}/>
          <Route exact path='/events' element={<>
            <NavBar/>
            <Events/>
            <Footer/>
          </>}/>
          <Route exact path='/competitions' element={<>
            <NavBar/>
            <Competitions/>
            <Footer/>
          </>}/>
          <Route exact path='/workshops' element={<>
            <NavBar/>
            <Workshops/>
            <Footer/>
          </>}/>
          <Route exact path='/socialcause' element={<>
            <NavBar/>
            <SocialCause/>
            <Footer/>
          </>}/>
          <Route exact path='/accommodation' element={<>
            <NavBar/>
            <Accommodation/>
            <Footer/>
          </>}/>
          <Route exact path='/team' element={<>
            <NavBar/>
            <Team/>
            <Footer/>
          </>}/>
        </Routes>
      </BrowserRouter>
    </ReactLenis>
  );
}

export default App;
