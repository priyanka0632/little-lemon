import { Container } from 'react-bootstrap'
import './highlights.css'
import GreekSalad from './assets/Snacks.jpg';


function Highlights(){
let highlights = [
    [GreekSalad, 'Greek Salad']
]

    return(
        <Container className='Weeklyspecials'>
            <div className='specials'>
                <h1 id='header'>Week's Specials</h1> {/**Give id header to evry h1 */}
                <p>We are a family owned Mediterranean restaurant, focused on <br />
                    traditional recipes served with a modern twist.<br />
                    </p>
</div>
<div className='highlights'>
        {highlights.map(ele =>{
            return(
                <div className='image'>
                        <img src={ele[0]} alt={ele[1]} ></img>
                                 </div>
//overlay image with image animation effects for further images change
//card image overlay with texts of mdb for the image effect in here
            )
        })}

</div>
        </Container>
    )
}

export default Highlights;

//overflow x to be hidden so that it won't change or show the extra white space on making it responsive
