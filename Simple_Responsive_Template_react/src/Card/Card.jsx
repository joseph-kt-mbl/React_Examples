import propTypes from 'prop-types'
import './Card.css';
import profilePic from './profile_pic.svg';
function Card({ data = { title: "Default Title", description: "Default Description" } }) {
    const { title, description } = data;

    return (
        <div className="card">
            <div className="profile-pic">
                <img src={profilePic} alt="profile picture" />
                <div className="title">
                    <p>
                        {title}
                    </p>
                </div>
            </div>
            <div className="description">
                <p>
                    {description}
                </p>
            </div>
        </div>
    );
}

Card.propTypes = {
    data : propTypes.object
}


export default Card;
