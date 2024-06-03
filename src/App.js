import './App.css';
import UseStateHook from './Components/UseStateHook/UseStateHook';
import UseEffectHook from './Components/UseEffectHook/UseEffectHook';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import { Container } from 'react-bootstrap';
import Home from './Components/Home/Home';
import Routerpage from './Components/Routerpage/Routerpage';
import Hookspage from './Components/Hookspage/Hookspage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container fluid className='py-3'>
        <Routes>
          <Route element={<Home/>} path='home' />
          <Route element={<Routerpage />} path='router' />
          <Route element={<Hookspage />} path='hooks'>
            <Route element={<UseStateHook />} path='usestate' />
            <Route element={<UseEffectHook />} path='useeffect' />
          </Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
