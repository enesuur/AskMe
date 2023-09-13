import { AiOutlineArrowLeft, AiOutlineHome } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import './NotFound.css';
export default function NotFound() {
    const navigate = useNavigate();
   
    function handleBack(){
        navigate(-1);
    }

    return (
        <section className='notfound container'>
            <div>
                <h1>404 :( </h1>
                <p>Page that you are looking for does not exist.</p>
                <p>
                    <Link onClick={() => handleBack}>
                        <AiOutlineArrowLeft />
                        Go back
                    </Link>
                    <Link to={'/'}>
                        <AiOutlineHome />
                        Homepage
                    </Link>
                </p>
            </div>
        </section>
    )
};