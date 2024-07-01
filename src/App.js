import { Route, BrowserRouter, Routes} from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';
import Home from './Pages/Home'
import About from './Pages/About'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Skills from "./Pages/Skills";
import Experience from "./Pages/Experience";

function App() {
  return (
   <>

<BrowserRouter>
  <Navbar/> 
 <Routes>
    <Route path='/' element={<Home  Animation={
          <TypeAnimation
            sequence={[
              "Software Engineer",
              1000,
              "MERN Stack Developer",
              1000,
              "UX/UI Designer",
              1000,
            ]}
             wrapper="div"
            cursor={true}
            repeat={Infinity}
           
          />
 } 
      />}></Route> 
   <Route path='/about' element={<About />}></Route>
   <Route path='/skills' element={<Skills />}></Route>
   <Route path='/experience' element={<Experience />}></Route>
   </Routes>
    <Footer/> 
 </BrowserRouter>




   </>
  );
}

export default App;
