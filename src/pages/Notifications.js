
import { Link } from 'react-router-dom';
import Notification from '../components/Notification';
import './Notifications.css';
export default function Notifications(){

    return (
        <section className='notifications container'>
            <h1>Notifications</h1>
            <div className='order-notifications'>
                <button>Recent</button>
                <button>Past</button>
            </div>
            <Notification/>
            <Notification/>
            <Notification/>
            <Notification/>
            <Notification/>
            <Notification/>
            <Notification/>
            <Notification/>
            <Notification/>
            <Notification/>

        </section>
    )
}