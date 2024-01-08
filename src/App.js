import React from 'react';
import { Content, Footer, Header } from './func-components';
import Calender from './Class-components';
//import './style.css'

function App() {
  return(
    // [<Header/>,<Content/>,<Footer/>]
    <>
    <Header/>
    <p><center><Calender/></center></p>
    <Content/>
    <Footer/>
    </>
  )
}

export default App;
