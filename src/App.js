import './App.css';
import React, { Suspense } from 'react';
import UseStateHook from './Components/UseStateHook/UseStateHook';
// import UseEffectHook from './Components/UseEffectHook/UseEffectHook';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import { Container } from 'react-bootstrap';
import Home from './Components/Home/Home';
import Routerpage from './Components/Routerpage/Routerpage';
import Hookspage from './Components/Hookspage/Hookspage';
const UseEffectHook = React.lazy(() => import('./Components/UseEffectHook/UseEffectHook'));


function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <div className='loader'>Loading</div> */}
      <Container fluid className='py-3'>
        <Suspense fallback={<div className='loader'><span>Loading</span></div>}>
          <Routes>
            <Route element={<Home />} path='home' />
            <Route element={<Routerpage />} path='router' />
            <Route element={<Hookspage />} path='hooks'>
              <Route element={<UseStateHook />} path='usestate' />
              <Route element={<UseEffectHook />} path='useeffect' />
            </Route>
          </Routes>
        </Suspense>
      </Container>
    </BrowserRouter>
  );
}

export default App;
