

import './Messages.css';
import Chatbox from '../components/Chatbox';
import Message from '../components/Message';
import {AiOutlineSend} from 'react-icons/ai';
export default function Messages() {
    return (

        <section className='messages container'>
            <div className='chat'>
                <div className='sidebar-chats'>
                    <Chatbox />
                    <Chatbox />
                    <Chatbox />
                    <Chatbox />
                    <Chatbox />
                    <Chatbox />
                    <Chatbox />
                    <Chatbox />
                    <Chatbox />
                    <Chatbox />
                </div>
                <div className='main-chat'>
                    <Message/>
                    <Message/>

                    <div className='chat-input'>
                        <input type='text' placeholder='Message...'/>
                        <AiOutlineSend/>
                    </div>
                </div>
            </div>
        </section>
    )
}