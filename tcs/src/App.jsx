import Home from './pages/Home/Home'
import About from './pages/About/About'
import Int from './pages/Int/Int';
import Exp from './pages/Exp/Exp';
import Log from './pages/Log/Log';
import Ecom from './pages/Ecom/Ecom';
import Cont from './pages/Cont/Cont';
import MyTCS from './pages/MyTCS/MyTCS';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import Dom from './pages/Dom/Dom';
import TCSKardo from './ListPages/TCSKardo/TCSKardo';
import Pickup from './ListPages/Pickup/Pickup';
import Rate from './ListPages/Rate/Rate';
import NearYou from './ListPages/NearYou/NearYou';


function App() {


  return (
    <>

      <div className='body'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/dom" element={<Dom />} />
            <Route path="/int" element={<Int />} />
            <Route path="/exp" element={<Exp />} />
            <Route path="/log" element={<Log />} />
            <Route path="/ecom" element={<Ecom />} />
            <Route path="/cont" element={<Cont />} />
            <Route path="/myTCS" element={<MyTCS />} />

          {/* List pages */}

          
            <Route path="/kardo" element={<TCSKardo />} />
            <Route path="/pickup" element={<Pickup />} />
            <Route path="/rate" element={<Rate />} />
            <Route path="/nearYou" element={<NearYou />} />
          </Routes>
        </BrowserRouter>
      </div>
      <div className="message-container">
        <p>Mobile and tablet version will be coming soon.</p>
      </div>
    </>
  )
}

export default App
