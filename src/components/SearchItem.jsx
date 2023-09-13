

import './SearchItem.css'
import Avatar from '../assets/avatar.jpg';
import { useEffect, useState} from 'react';
export default function SearchItem() {
    const [isFollowing,setIsFollowing] = useState(true);
    const [btnText,setBtnText] = useState(null);
    function handleBtnClick(event){
        event.preventDefault();
        const temp = isFollowing === true ? 'Following' : 'Follow'; 
        setBtnText(temp )
    }

    useEffect(() => {
        const temp = isFollowing === true ? 'Following' : 'Follow'; 
        setBtnText(temp);
    }, [])
    
    const [isFollowed, setIsFolloweed] = useState(null);
    return (
        <div className='search-items'>
            <div className='item-info'>
                <div className='item-avatar'>
                    <img src={Avatar} alt='Avatar' />
                </div>
                <div className='user-info'>
                    <span>Username</span>
                    <span>Followers</span>
                </div>
            </div>
            <button onClick={handleBtnClick}>{btnText}</button>
        </div>
    )
}