import { Container } from "react-bootstrap";
import './OurMenu.css';
import Snack from './assets/Snacks.jpg';
import Breakfast from './assets/Breakfast.jpg';
import Lunch from './assets/Lunch.jpeg';
import Dinner from './assets/Dinner.jpg';
import Desert from  './assets/Desert.jpg';
import Drinks from './assets/Drinks.jpg';

function OurMenu(){

    let menu = [
        ["Snacks", Snack],
        ["Breakfast", Breakfast],
        ["Lunch", Lunch],
        ["Dinner", Dinner],
        ["Desert", Desert],
        ["Drinks", Drinks]
    ]

    return(
            <div className="Ourmenu">
                <Container id="header"> {/**as id should be unique as if the same id is used this will change the entire id used in the app
                 * so we're naming all the id's header so that we do not need change the heading in every js and css
                 */}
                    <h1>Our Menu</h1>
                </Container>
                <div className="menuItems">
                    <Container className="container">
                        <div className='meals'>
                            {menu.map(ele => {
                                return (
                                    <div>
                                        <img src={ele[1]} alt={ele[0]}></img>
                                        <h3>{ele[0]}</h3>
                                    </div>)
                            })}
                        {/**  <div>
                                <img src={Breakfast} alt="Breakfast" ></img>
                                <h3>Breakfast</h3>  {/**I can create a horizontally scrollable event in the project either with the whole website
                                 * or just add the scrollable event when the website is reduced to responsive
                            </div>
                            <div>
                            <img src={Lunch} alt="Lunch"></img>
                            <h3>Lunch</h3>

                            </div>
                            <div>
                            <img src={Dinner} alt="Dinner"></img>
                            <h3>Dinner</h3>

                            </div>
                            <div>
                            <img src={Desert} alt="Desert"></img>
<h3>Desert</h3>
                            </div>
                            <div>
                                <img src={Drinks} alt="Drinks"></img>
                                <h3>Drinks</h3>
                            </div> */}
                                                    </div>
                    </Container>
                </div>
            </div>
    )

}
export default OurMenu;