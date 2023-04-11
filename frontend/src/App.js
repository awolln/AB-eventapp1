import React from "react";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {GlobalProvider} from './context/GlobalState'
import Header from "./components/Header";

function App() {
  return (
   <div className="App">
    <Header />
    <GlobalProvider>
      <Main />
    </GlobalProvider>
    <Footer />
   </div>
   
  );
}

export default App;
