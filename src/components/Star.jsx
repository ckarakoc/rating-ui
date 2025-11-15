export const Star = ({star, rating, hover, color, ratingClick, hoverEnter, hoverLeave}) => {
    return (
        <span
            onClick={() => ratingClick(star)}
            onMouseEnter={() => hoverEnter(star)}
            onMouseLeave={hoverLeave}
            className='star'
            style={{
                color: star <= (hover || rating) ? color : 'lightgray'
            }}
        >
            {'\u2605'}
        </span>
    );
}
