import React from "react";
import Navigationbar from './components/Navigationbar';
import HeroSection from "./components/HeroSection";
import OurMenu from "./components/Our menu";
import Highlights from './components/Highlights';
import './App.css'


function App() {
    return(
    <main>
        <Navigationbar></Navigationbar>
        <HeroSection></HeroSection>
        <OurMenu></OurMenu>
        <Highlights></Highlights>
    </main>
           );
}

export default App;
