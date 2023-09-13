

import './Chatbox.css';
import Avatar from '../assets/avatarn.jpeg';
export default function Chatbox(){

    return(
        <div className='chatbox'>
            <div>
                <img src={Avatar} alt='Avatar'/>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    )
}