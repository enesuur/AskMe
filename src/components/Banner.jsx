import { Link } from 'react-router-dom';
import './Banner.css';
export default function Banner(){

    return(
        <div className="banner container-fluid">
            <p>
                <Link to={'/'}>Ask.me</Link>
            </p>
        </div>
    );
}