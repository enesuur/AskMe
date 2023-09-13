
import { IoMdNotificationsOutline } from 'react-icons/io';
import './Notification.css';
import { AiOutlineCalendar } from 'react-icons/ai';
export default function Notification() {

    return (
        <div className='notification'>
            <div >
                <IoMdNotificationsOutline />
                <span>
                    <AiOutlineCalendar />
                    {'23/06/1923'}
                </span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta velit explicabo consequuntur quidem officia et quae pariatur sint a accusamus?</p>
        </div>
    )
};