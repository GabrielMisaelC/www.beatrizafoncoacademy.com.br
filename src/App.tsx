import { Tweet } from "./components/Tweet";
import { Fragment, useState } from 'react';
import { AppRoutes } from "./Routes";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import GlobalStyle from "./GlobalStyles";

function App() {


  return (
    <Fragment>  
          <GlobalStyle />
          <AppRoutes/>
    </Fragment>
  );
}

export default App
