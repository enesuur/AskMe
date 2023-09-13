
import './Profile.css';
import Avatar from '../assets/avatar.jpg';
import Banner from '../assets/profilebanner.jpg';
import { FiTwitter } from 'react-icons/fi';
import { BsSnapchat } from 'react-icons/bs';
import {AiOutlineInstagram} from 'react-icons/ai';
import { useState } from 'react';
import Question from '../components/Question';
import { Link } from 'react-router-dom';
import ProfileModal from '../modals/ProfileModal';
export default function Profile() {
    const [showBtn, setShowBtn] = useState(false);
    const [maxCharacter, setMaxCharacter] = useState(50);
    const [text, setText] = useState('');
    const [isOverLimit, setIsOverLimit] = useState(false);
    const [expandTextArea, setTextAreaExpanded] = useState('72px');
    const [isModalOpen,setIsModalOpen] = useState(false);
    const [isFollowers,setIsFollowers] = useState(null);
    function handleTextAreaChange(event) {
        const newText = event.target.value;
        setText(newText);

        if (newText.length > maxCharacter) {
            setIsOverLimit(true);
        } else {
            setIsOverLimit(false);
        }
    }

    function handleTextAreaFocus() {
        setShowBtn(true);
    }

    function handleClickFollowing(){
        setIsFollowers(false);
        setIsModalOpen(true);
    }

    function handleClickFollowers(){
        setIsFollowers(true);
        setIsModalOpen(true);
    }

    return (
        <section className="profile container">
            { isModalOpen && <ProfileModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} isFollowers={isFollowers} />}
            <div className='profile-showcase'>
                <div className='profile-banner'>
                    <img src={Banner} alt="profile banner" />
                </div>
                <div className='profile-avatar'>
                    <img src={Avatar} alt="avatar" />
                    <div className='profile-username'>
                        <span >Username</span>
                        <Link to={'/'}>@0xThorfin</Link>
                    </div>
                </div>
            </div>
            <div className='profile-info'>
                <div className='profile-social'>
                    <div >
                        <FiTwitter />
                        <span>0xenes</span>
                    </div>
                    <div>
                        <BsSnapchat/>
                        <span>0xenes</span>
                    </div>
                    <div>
                        <AiOutlineInstagram />
                        <span>0xenes</span>
                    </div>
                </div>
                <div className='profile-stats'>
                    <div>
                        <b>Answers</b>
                        <span>34</span>
                    </div>
                    <div onClick={handleClickFollowing}>
                        <b>Following</b>
                        <span>31</span>
                    </div>
                    <div onClick={handleClickFollowers}>
                        <b>Followers</b>
                        <span>12</span>
                    </div>
                </div>
            </div>
            <form >
                <div className='textarea-inp'>
                    <textarea
                        name='question'
                        id='question'
                        onChange={handleTextAreaChange}
                        value={text}
                        style={{ borderColor: isOverLimit ? 'red' : '' }}
                        onFocus={handleTextAreaFocus}
                        placeholder='Ask something you want to know!'

                    >
                    </textarea>
                    <span style={{ fontSize: '0.75em', color: isOverLimit ? 'red' : '' }}>
                        {maxCharacter - text.length >= 0 ? `${Math.abs(maxCharacter - text.length)} characters left ` : `${Math.abs(maxCharacter - text.length)} characters expanded `}
                    </span>
                </div>

                <div className='btn-ask'>
                    {showBtn && (
                        <>
                            <button>Generate Random</button>
                            <button>Ask Question</button>
                        </>
                    )}
                </div>
            </form>
            <div className='profile-questions'>
                <h2>Questions</h2>
                <Question />
                <Question />
                <Question />

            </div>
            
        </section>
    )
}