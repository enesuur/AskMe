import React from 'react';
import { GiMonkey } from 'react-icons/gi';
import { AiOutlineCalendar } from 'react-icons/ai';
import './QuestionModal.css';
import Avatar from '../assets/avatar.jpg';
import Comment from '../components/Comment';

export default function QuestionModal({ openQuestionModal, setOpenQuestionModal }) {
  const handleModalClick = (event) => {
    setOpenQuestionModal(false);
  };

  return (
    <>
      {openQuestionModal && (
        <div className='modal-overlay' onClick={handleModalClick}>
          <div className='question-content' onClick={(e) => e.stopPropagation()}>
            <div className='thread-header'>
              <h1>Thread</h1>
              <span className='close' onClick={() => setOpenQuestionModal(false)}>&times;</span>
            </div>
            <div className='thread-question-container'>
              <div className='thread-question-header'>
                <div className='thread-question-title'>
                  <b>Question</b>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className='thread-question-avatar'>
                  <div className='thread-avatar-info'>
                    <div className='thread-avatar-container'>
                      <GiMonkey />
                    </div>
                    <span className='thread-avatar-title'>Anonymous</span>
                  </div>
                  <div className='thread-question-date'>
                    <AiOutlineCalendar />
                    <span>06/09/2023</span>
                  </div>
                </div>
              </div>
              <hr />
              <div className='thread-body'>
                <div>
                  <div className='thread-avatar'>
                    <img src={Avatar} alt='Avatar Photo' />
                  </div>
                  <div className='thread-userinfo'>
                    <span className='thread-username'>Bincxz</span>
                    <span className='thread-answerdate'>11.09.2023</span>
                  </div>
                </div>
                <p className='thread-question-answer'>
                  <b>Answer</b>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, tempora.</p>
                </p>

              </div>
            </div>
            <div className='question-comments'>
              <h2>Comments</h2>
              <Comment/>
              <Comment/>
              <Comment/>
              <Comment/>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
