

import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';
import './Comment.css';
import { useState } from 'react';
export default function Comment() {
    const [like,setLike] = useState(0);
    const [isLikedBefore, setIsLikedBefore] = useState(false);
    function upLikes(like){
        if(!isLikedBefore) {
            setLike((like) => like + 1);
            setIsLikedBefore(true);
        }
    };

    function downLikes(like){
        if(isLikedBefore) {
            setLike((like) => like - 1);
            setIsLikedBefore(false);
        }
    };
    return (
        <div className='comment'>
            <h2 className='comment-title'>Anonymous</h2>
            <p className='comment-content'>Lorem ipsum dolor sit.</p>
            <div className='vote-container'>
                <span className='vote-counter'>Likes: {like}</span>
                <span className='vote-comment'>
                    <AiOutlineArrowUp  onClick={upLikes} />
                    <AiOutlineArrowDown onClick={downLikes} />
                </span>
            </div>
        </div>
    )
}