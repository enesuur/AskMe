

import { GiMonkey } from 'react-icons/gi';
import { PiSmileySadLight } from 'react-icons/pi';
import { AiOutlineHeart, AiOutlineShareAlt, AiOutlineCalendar } from 'react-icons/ai';
import { BiCommentDots } from 'react-icons/bi';
import { useState } from 'react';
import SharingModal from '../modals/SharingModal';
import QuestionModal from '../modals/QuestionModal';
import Avatar from '../assets/avatar.jpg';
import './Question.css';

export default function Question() {
    const [isAnswered, setIsAnwered] = useState(true);
    const [openSharingModal,setOpenSharingModal] = useState(false);
    const [openQuestionModal,setOpenQuestionModal] = useState(false);
    return (
        <section className='question'>
            <div className='question-header'>
                <div className='question-title'>
                    <b>Question</b>
                    <p>Lorem ipsum dolor sit amet. </p>
                </div>
                <div className='question-avatar'>
                    <div className='avatar-info'>
                        <div className='avatar-container'>
                            <GiMonkey />
                        </div>
                        <span className='avatar-title'>Anonymous</span>
                    </div>
                    <div className='question-date'>
                        <AiOutlineCalendar />
                        <span>06/09/2023</span>
                    </div>
                </div>

            </div>
            <hr />
            <div className='answer'>
                {!isAnswered && (
                    <div className='not-answered'>
                        <PiSmileySadLight />
                        <span>Question hasn't been answered</span>
                    </div>
                )}
                {isAnswered && (
                    <div className='answered'>
                        <div>
                            <div className='user-avatar'>
                                <img src={Avatar} alt='Avatar' />
                            </div>
                            <div className='answer-info'>
                                <b className='username'>Thorfinn</b>
                                <span className='answer-date'>11.09.2023</span>
                            </div>
                        </div>
                        <p className='user-answer'>
                            <b>Answer: </b>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, alias.
                        </p>
                        <div className='answer-reactions'>
                            <span>
                                <AiOutlineHeart />
                                {4}
                            </span>
                            <span onClick={() => setOpenQuestionModal(true) }>
                                <BiCommentDots />
                            </span>
                            <span onClick={() => setOpenSharingModal(true) }>
                                <AiOutlineShareAlt  />
                            </span>
                        </div>
                    </div>
                )}
            </div>
            {openSharingModal && (
                <SharingModal openSharingModal={openSharingModal} setOpenSharingModal={setOpenSharingModal}/>
            )}
            {openQuestionModal && (
                <QuestionModal openQuestionModal={openQuestionModal} setOpenQuestionModal={setOpenQuestionModal}/>
            )}
        </section>
    )
};