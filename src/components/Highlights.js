import { Container } from 'react-bootstrap'
import './highlights.css'
import { ArrowLeftCircle } from 'react-bootstrap-icons';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import GreekSalad from './assets/Snacks.jpg';
import Bruschetta from './assets/Bruschetta.jpg';
import LemonHotdog from './assets/heroImage.jpg';
import LemonPasta from './assets/Patsa.jpg'
import GreekFish from './assets/greekfish.jpg';
import { Stopwatch } from 'react-bootstrap-icons';

function onClickForArrow(val){
    document.querySelector(".highlights").scrollLeft += val; //queryselector is an advanced feature of the get element by Id/class as . and #
    //suggests id and class in css
}

function Highlights(){
let highlights = [
    [GreekSalad, 'The Greek Salad', '$12.99',
        'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished...', '15 mins'],
    [Bruschetta, 'Bruschetta', '$12.99',
        'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished...', '15 mins'],
    [LemonHotdog, 'Lemon Hotdog', '$12.99',
        'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished...', '15 mins'],
    [LemonPasta, 'Lemon Pasta', '$12.99',
        'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished...', '15 mins'],
    [GreekFish, 'Greek Style Fish', '$12.99',
        'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished...', '15 mins'],
]

    return(
        <Container className='Weeklyspecials'>
            <div className='specials'>
                <div className='specialarrows'>
                <h1 id='header'>Week's Specials</h1> {/**Give id header to evry h1 */}

                <div className='arrows'>
                <ArrowLeftCircle className='arrowleft' onClick={() => onClickForArrow(-50)}></ArrowLeftCircle>
                <ArrowRightCircle className='arrowright' onClick={() => onClickForArrow(50)}></ArrowRightCircle>
                </div>
                </div>



                <p>We are a family owned Mediterranean restaurant, focused on <br />
                    traditional recipes served with a modern twist.<br />
                    </p>
</div>
<div className='highlights'>
        {highlights.map(ele =>{
            return(
                <div className='image'>
                    <div className='highlightspecial'>
                        <div className='foodimages'>
                                          <img src={ele[0]} alt={ele[1]} ></img>
                                          </div>
                                          <div className='imagedetails'>
                                          <p className='imageheading'>{ele[1]}</p>
                                          <div>
                                            <p>{ele[2]}</p>
                                          </div>
                                          <div className='imagedes'>
                                            <p>{ele[3]}</p>
                                            <div className='timer' >
                                            <Stopwatch id='timericon'></Stopwatch>
                                            <p>{ele[4]}</p>
                                            </div>
                                          </div>
                                           </div>
                                          </div>
                                          </div>

//overlay image with image animation effects for further images change                      <img src={ele[0]} alt={ele[1]} ></img>

//card image overlay with texts of mdb for the image effect in here
            )
        })}

</div>
        </Container>
    )
}

export default Highlights;

//overflow x to be hidden so that it won't change or show the extra white space on making it responsive
