import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Downloads from './pages/Downloads';
import Faqs from './pages/Faqs';

import './App.css'
import Products from './pages/Products';
import ForYou from './pages/ForYou';
import Footer from './partials/Footer';
import Header from './partials/Header';
import Fees from './pages/Fees';

import WhatsAppIcon from './assets/images/WhatsApp-Logo-Icon.svg'

const pages = [
  {
    path: '/',
    element : () => <Home footer={<Footer/>} header={<Header/>}/>
  }, {
    path: '/products',
    element : () => <Products footer={<Footer/>} header={<Header/>}/>
  }, {
    path: '/about',
    element : () => <About footer={<Footer/>} header={<Header/>}/>
  }, {
    path: '/for-you',
    element : () => <ForYou footer={<Footer/>} header={<Header theme="light"/>}/>
  }, {
    path: '/contact-us',
    element : () => <Contact footer={<Footer/>} header={<Header/>}/>,
  }, {
    path: '/fees',
    element : () => <Fees footer={<Footer/>} header={<Header/>}/>,
  }, {
    path: '/faqs',
    element : () => <Faqs footer={<Footer/>} header={<Header/>}/>,
  },{
    path: '/downloads',
    element : () => <Downloads footer={<Footer/>} header={<Header/>}/>,
  }
]

function App() {

  return (
    <BrowserRouter>
    
      <main>
        <div className='floating-button wtsp'>
          <a href="https://api.whatsapp.com/send?phone=14753300913&text=%C2%A1Hola!%20Quisiera%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20abrir%20una%20cuenta%20en%20Estados%20Unidos%20%F0%9F%87%BA%F0%9F%87%B8">
            <img src={WhatsAppIcon} alt="" />
          </a>
        </div>
        <Routes>
          {
            pages.map((page, key) => {
              return (
                  <Route key={key} path={page.path} element={page.element()}></Route>
              )
            })
          }
        </Routes>
      </main>

    </BrowserRouter>
  )
}

export default App
