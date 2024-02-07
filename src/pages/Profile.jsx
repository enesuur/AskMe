import "./Profile.css";
import Avatar from "../assets/avatar.jpg";
import Banner from "../assets/profilebanner.jpg";
import { FiTwitter } from "react-icons/fi";
import { BsSnapchat } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import React , { useContext, useEffect, useState } from "react";
import Question from "../components/Question";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import ProfileModal from "../modals/ProfileModal";
export default function Profile() {
  const [showBtn, setShowBtn] = useState(false);
  const [maxCharacter, setMaxCharacter] = useState(100);
  const [text, setText] = useState("");
  const [isOverLimit, setIsOverLimit] = useState(false);
  const [expandTextArea, setTextAreaExpanded] = useState("72px");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFollowers, setIsFollowers] = useState(null);
  const [questionsJSX, setQuestionsJSX] = useState([]);


  const questions = [
    "What activities do you enjoy and why?",
    "What is your favorite memory and why?",
    "How would you spend an ideal day? What activities would you do?",
    "What is the most important thing in your life and how did you determine its value?",
  ];

  const authContext = useContext(AuthContext);
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

  function handleClickFollowing() {
    setIsFollowers(false);
    setIsModalOpen(true);
  }

  function handleClickFollowers() {
    setIsFollowers(true);
    setIsModalOpen(true);
  }

  function generateRandom(e) {
    const randomQuestion =
      questions[Math.floor(Math.random() * questions.length)];
    setText(randomQuestion);
    e.preventDefault();
  }

  function handleAsk(event) {
    event.preventDefault();
    if (text === "") {
      alert("You need to say something before you ask a question.");
      return;
    }
    let newQuestionJSX = (
      <Question
        questionTitle={text}
        questionAnswer={"Question has not been answered yet."}
      />
    );
    
    setQuestionsJSX(prevQuestionsJSX => [...prevQuestionsJSX, newQuestionJSX]);
  };
  

  useEffect(() => {
    authContext.setIsAuthConfirmed(true);
  }, []);

  return (
    <section className="profile container">
      {isModalOpen && (
        <ProfileModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          isFollowers={isFollowers}
        />
      )}
      <div className="profile-showcase">
        <div className="profile-banner">
          <img src={Banner} alt="profile banner" />
        </div>
        <div className="profile-avatar">
          <img src={Avatar} alt="avatar" />
          <div className="profile-username">
            <span>Username</span>
            <Link to={"/"}>@0xThorfin</Link>
          </div>
        </div>
      </div>
      <div className="profile-info">
        <div className="profile-social">
          <div>
            <FiTwitter />
            <span>0xenes</span>
          </div>
          <div>
            <BsSnapchat />
            <span>0xenes</span>
          </div>
          <div>
            <AiOutlineInstagram />
            <span>0xenes</span>
          </div>
        </div>
        <div className="profile-stats">
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
      <form>
        <div className="textarea-inp">
          <textarea
            name="question"
            id="question"
            onChange={handleTextAreaChange}
            value={text}
            style={{ borderColor: isOverLimit ? "red" : "" }}
            onFocus={handleTextAreaFocus}
            placeholder="Ask something you want to know!"
          ></textarea>
          <span style={{ fontSize: "0.75em", color: isOverLimit ? "red" : "" }}>
            {maxCharacter - text.length >= 0
              ? `${Math.abs(maxCharacter - text.length)} characters left `
              : `${Math.abs(maxCharacter - text.length)} characters expanded `}
          </span>
        </div>

        <div className="btn-ask">
          {showBtn && (
            <>
              <button onClick={generateRandom}>Generate Random</button>
              <button onClick={handleAsk}>Ask Question</button>
            </>
          )}
        </div>
      </form>

      <div className="profile-questions">
        <h2>Questions</h2>
        {questionsJSX.map((question, index) => (
          <React.Fragment key={index}>{question}</React.Fragment>
        ))}
        <Question
          questionTitle={"Why do you like coffee so freaking much?"}
          questionAnswer={"I like coffee but idk man"}
        />
        <Question
          questionTitle={
            "What is your name?"
          }
          questionAnswer={"I like sleeping."}
        />
      </div>
    </section>
  );
}
