
import './Feed.css';
import { useContext, useEffect, useState } from 'react';
import Question from '../components/Question';
import AuthContext from '../context/AuthContext';
export default function Profile() {
    const authContext = useContext(AuthContext);

    useEffect(() => {
        authContext.setIsAuthConfirmed(true);
    },[])

    return (
        <section className="feed container">

            <div className='feed-questions'>
                <h2>Feed</h2>
                <p className='feed-note'>PS: Project is not finished yet,it is just for showcase ;)</p>
                <div className="profile-questions">
                <h2>Questions</h2>
            <Question 
            questionTitle={"What activities do you enjoy and why?"}
            questionAnswer={"I like coffee but idk man"}
            />
            <Question
            questionTitle={"How would you spend an ideal day ? What activities would you do?"}
            uestionAnswer={"I like sleeping."}
            />
            <Question 
            questionTitle={"What activities do you enjoy and why?"}
            questionAnswer={"I like coding."} 
            />
            </div>
        </div>
            
        </section>
    )
}