import { GiMonkey } from "react-icons/gi";
import { PiSmileySadLight } from "react-icons/pi";
import {
  AiOutlineHeart,
  AiOutlineShareAlt,
  AiOutlineCalendar,
} from "react-icons/ai";
import { BiCommentDots } from "react-icons/bi";
import { useState } from "react";
import SharingModal from "../modals/SharingModal";
import QuestionModal from "../modals/QuestionModal";
import Avatar from "../assets/avatar.jpg";
import "./Question.css";

export default function Question({
  questionTitle,
  questionAnswer}) {
  const [isAnswered, setIsAnwered] = useState(true);
  const [openSharingModal, setOpenSharingModal] = useState(false);
  const [openQuestionModal, setOpenQuestionModal] = useState(false);
  const [isLikedBefore, setIsLikedBefore] = useState(false);
  const [like, setLike] = useState(0);

  function handleLike() {
    if (isLikedBefore) {
      setLike(like - 1);
      setIsLikedBefore(false);
    }else if(!isLikedBefore){
      setLike(like + 1);
      setIsLikedBefore(true);
    };
  };
  
  function getFormattedDate() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // Ocak 0'dan başlar, bu yüzden +1 ekliyoruz.
    const yy = String(today.getFullYear()).slice(-2); // Son iki rakamı alıyoruz.

    return dd + '/' + mm + '/' + yy;
};

  return (
    <section className="question">
      <div className="question-header">
        <div className="question-title">
          <b>Question</b>
          <p>{questionTitle}</p>
        </div>
        <div className="question-avatar">
          <div className="avatar-info">
            <div className="avatar-container">
              <GiMonkey />
            </div>
            <span className="avatar-title">Anonymous</span>
          </div>
          <div className="question-date">
            <AiOutlineCalendar />
            <span>{getFormattedDate()}</span>
          </div>
        </div>
      </div>
      <hr />
      <div className="answer">
        {!isAnswered && (
          <div className="not-answered">
            <PiSmileySadLight />
            <span>Question hasn't been answered</span>
          </div>
        )}
        {isAnswered && (
          <div className="answered">
            <div>
              <div className="user-avatar">
                <img src={Avatar} alt="Avatar" />
              </div>
              <div className="answer-info">
                <b className="username">Thorfinn</b>
                <span className="answer-date">11.09.2023</span>
              </div>
            </div>
            <p className="user-answer">
              <b>Answer: </b>
              {questionAnswer}
            </p>
            <div className="answer-reactions">
              <span>
                <AiOutlineHeart onClick={handleLike} />
                {like}
              </span>
              <span onClick={() => setOpenQuestionModal(true)}>
                <BiCommentDots />
              </span>
              <span onClick={() => setOpenSharingModal(true)}>
                <AiOutlineShareAlt />
              </span>
            </div>
          </div>
        )}
      </div>
      {openSharingModal && (
        <SharingModal
          openSharingModal={openSharingModal}
          setOpenSharingModal={setOpenSharingModal}
        />
      )}
      {openQuestionModal && (
        <QuestionModal
          questionTitle ={questionTitle}
          questionAnswer = {questionAnswer}
          openQuestionModal={openQuestionModal}
          setOpenQuestionModal={setOpenQuestionModal}
        />
      )}
    </section>
  );
}
