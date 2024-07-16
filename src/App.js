import React from "react"
import ReactDOM from "react-dom/client";
import './App.css';
import Header from "./components/Header.js"
import Main from "./components/Main.js"
import Footer from"./components/Footer.js"
import Nav from"./components/Nav.js"

function App() {
  return (
    <>
     <Header />
     <Nav />
     <Main />
     <Footer />
    </>
  );
}

export default App;
