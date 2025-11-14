export const Rating = () => {
    const stars = Array.from({length: 5}, (_, i) => i + 1);

    /*const clicked = (index) => console.log(`Star ${index} clicked!`);
    const hovered = (status) => console.log(`Current hover status: ${status}`);*/

    return (
        <div className='rating-container' /*style={styles.container}*/>
            <h2 /*style={styles.heading}*/> Rate your Experience </h2>
            <div className="stars">
                {stars.map((star, index) => (
                    <span
                        /*onClick={() => clicked(index)}
                        onMouseEnter={() => hovered('enter')}
                        onMouseLeave={() => hovered('leave')}*/
                        key={star}
                        className='star'>{'\u2605'}
                    </span>
                ))}
            </div>
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
