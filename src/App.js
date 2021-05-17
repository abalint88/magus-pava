import React from "react";

import './Scss/styles.scss';
import 'rpg-awesome/css/rpg-awesome.min.css'

import Menu from "./Components/Menu";
import Router from "./Router";
import Footer from "./Components/Footer";

const App = () => {

  return (
    <>
      <Menu />
      <Router />
      <Footer />
    </>
  );
};

export default App;
