

import Avatar from '../assets/avatar.jpg'
import './Message.css';
export default function Message() {
    return (
        <div className="message">
            <div className='message-avatar'>
                <img src={Avatar} alt='Avatar' />
            </div>
            <p className='message-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At modi voluptatem eos voluptas atque ea necessitatibus placeat officia saepe, consequatur blanditiis dolorem, eum laborum asperiores molestiae ratione enim delectus tempora nemo! Beatae nemo natus rem in accusantium soluta aliquam molestiae quae, porro saepe, quibusdam at possimus numquam pariatur perspiciatis doloribus delectus animi, dolor sapiente! Culpa tenetur ab deleniti assumenda veniam error officia consequuntur provident, cumque, repellendus at iusto ex, quae dolore nisi ullam molestias facere asperiores dignissimos iure laboriosam eligendi. Corrupti recusandae, ipsum quisquam repellat amet iste vel eum magnam omnis assumenda autem, ut libero quasi minus sit ad quam impedit quos mollitia laboriosam non aspernatur? Placeat laboriosam dolor aliquam dolorum est exercitationem, ea quod. Animi enim aut iste adipisci voluptate hic est doloremque mollitia minus possimus inventore eius esse pariatur, quaerat ad alias quibusdam? Provident repellat aliquid consectetur, ipsa placeat deleniti in aspernatur incidunt explicabo ipsum ratione impedit quo beatae atque numquam quos rem commodi nostrum, ea illo dolorem amet? Cupiditate placeat neque maxime eos qui impedit nisi, consectetur esse. Assumenda, consequatur architecto mollitia vel nemo blanditiis eos saepe excepturi modi magni, eum est, labore consectetur obcaecati temporibus sunt quidem dicta maiores reiciendis maxime iusto nostrum voluptatum? Deserunt, repellendus.
                <div className='message-info'>
                    <span>00.15 AM</span>
                    <span>Read</span>
                </div>
            </p>

        </div>
    )
};