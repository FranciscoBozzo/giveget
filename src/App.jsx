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

import ScrollToTop from './effects/ScrollToTop';

import WhatsAppButton from './components/WhatsAppButton'

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
      <ScrollToTop/>
      <main>
      
        <Routes>
          {
            pages.map((page, key) => {
              return (
                  <Route key={key} path={page.path} element={page.element()}></Route>
              )
            })
          }
        </Routes>
        <WhatsAppButton/>
      </main>

    </BrowserRouter>
  )
}

export default App
