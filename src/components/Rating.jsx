import {useState} from "react";
import {Star} from "./Star.jsx";
import {Modal} from "./Modal.jsx";
import {Button} from "./Button.jsx";

export const Rating = ({heading = 'Rating', color = 'gold'}) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [submitted, setSubmitted] = useState(false);

    const stars = Array.from({length: 5}, (_, i) => i + 1);
    const feedbackMessages = ['Terrible', 'Poor', 'Fair', 'Good', 'Excellent'];

    /*const clicked = (index) => console.log(`Star ${index} clicked!`);
    const hovered = (status) => console.log(`Current hover status: ${status}`);*/
    const handleSubmit = () => {
        if (rating > 0) {
            setSubmitted(true);
        }
    };

    const closeModal = () => {
        setSubmitted(false);
        setRating(0);
        setHover(0);
    }

    return (
        <div className='rating-container' /*style={styles.container}*/>
            <h2 /*style={styles.heading}*/> {heading} </h2>
            <div className="stars">
                {stars.map((star, index) => (
                    <Star
                        key={star}
                        star={star}
                        rating={rating}
                        hover={hover}
                        color={color}
                        ratingClick={setRating}
                        hoverEnter={setHover}
                        hoverLeave={() => setHover(null)}
                    />
                    // <span
                    //     /*onClick={() => clicked(index)}
                    //     onMouseEnter={() => hovered('enter')}
                    //     onMouseLeave={() => hovered('leave')}*/
                    //     onClick={() => setRating(star)}
                    //     onMouseEnter={() => setHover(star)}
                    //     onMouseLeave={() => setHover(0)}
                    //     key={star}
                    //     className='star'
                    //     style={{
                    //         color: star <= (hover || rating) ? color : 'lightgray'
                    //     }}
                    //     /*className={`star ${star <= (hover || rating) ? 'active' : ''}`}*/
                    // >{'\u2605'}
                    // </span>
                ))}
            </div>
            {rating > 0 && <p className="feedback">{feedbackMessages[rating - 1]}</p>}
            {/*<button className="submit-btn" onClick={handleSubmit} disabled={rating === 0}>Submit</button>*/}
            <Button className="submit-btn" disabled={rating === 0} onClick={handleSubmit}>
                Submit
            </Button>
            <Modal isOpen={submitted} onClose={closeModal} rating={rating}/>
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
