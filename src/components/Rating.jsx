import {useState} from "react";

export const Rating = ({heading = 'Rating', color = 'gold'}) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const stars = Array.from({length: 5}, (_, i) => i + 1);
    const feedbackMessages = ['Terrible', 'Poor', 'Fair', 'Good', 'Excellent'];

    /*const clicked = (index) => console.log(`Star ${index} clicked!`);
    const hovered = (status) => console.log(`Current hover status: ${status}`);*/

    return (
        <div className='rating-container' /*style={styles.container}*/>
            <h2 /*style={styles.heading}*/> {heading} </h2>
            <div className="stars">
                {stars.map((star, index) => (
                    <span
                        /*onClick={() => clicked(index)}
                        onMouseEnter={() => hovered('enter')}
                        onMouseLeave={() => hovered('leave')}*/
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHover(star)}
                        onMouseLeave={() => setHover(0)}
                        key={star}
                        className='star'
                        style={{
                            color: star <= (hover || rating) ? color : 'lightgray'
                        }}
                        /*className={`star ${star <= (hover || rating) ? 'active' : ''}`}*/
                    >{'\u2605'}
                    </span>
                ))}
            </div>
            {rating > 0 && <p className="feedback">{feedbackMessages[rating - 1]}</p>}
        </div>
    )
};

const styles = {
    container: {
        textAlign: 'center',
        fontFamily: 'Arial, Helvetica, sans-serif',
        padding: '20px'
    },
    heading: {color: 'lime'}
}

export default Rating;
