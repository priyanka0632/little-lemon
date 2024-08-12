import { Button } from 'react-bootstrap';
import './HeroSection.css';
import videoIcon from  './assets/play-button.png'
import Container from 'react-bootstrap/Container';
import x from './assets/x.png';
import instagram from './assets/instagram.png';
import facebook from './assets/facebook.png';
import heroImage from './assets/heroImage.jpg';


function HeroSection(){

let imageClick= () => {
  console.log('Click!!!')
}

  return (
     <div className='Container'>
      <Container>
        <div className='heroContainer'>
<div className='elements'>
  <p id='tagline'>Delicious in every food bite!</p>
  <h1 id='Heading'>LITTLE LEMON</h1>
  <p id='text'>We are a family owned Mediterranean restaurant, focused on </p>
    <p  id='text1'>traditional recipes served with a modern twist.</p>
  <div className='buttons'>
    <Button id='Reservetable' className='Button'>Reserve a table</Button>
    <div className='videoButton'>
      <img src={videoIcon} alt='Watch Video' id='videoIcon'></img>
      <p>Watch Video</p>
    </div>
  </div>
  <div className='socialMedia'>
    <a href='https://www.facebook.com/' >
    <img src={facebook} alt='facebook' id='facebook' onClick={()=>imageClick}></img>
    </a>
    <a href='https://www.instagram.com/'>
    <img src={instagram} alt='instagram' id='instagram'></img>
    </a>
    <a href='https://x.com/?lang=en'>
    <img src={x} alt='x' id='x'></img>
    </a>
</div>
</div>
<div className='hero'>
  <img src={heroImage} className='heroPic' loading='lazy' ></img>
  </div>

</div>
</Container>
</div>
  )}



export default HeroSection;