

import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';
import './Comment.css';
export default function Comment() {
    return (
        <div className='comment'>
            <h2 className='comment-title'>Anonymous</h2>
            <p className='comment-content'>Lorem ipsum dolor sit.</p>
            <div className='vote-container'>
                <span className='vote-counter'>Votes: 0</span>
                <span className='vote-comment'>
                    <AiOutlineArrowUp />
                    <AiOutlineArrowDown />
                </span>
            </div>
        </div>
    )
}