import React, { useState } from 'react';
import Star from './Star';
/*
function StarRating() {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);


    return (
        <div className='stars'>
            {[...new Array(5)].map((star, index) => {
                const currentRating = index + 1;
                return (
                    <label key={index}>
                        <input 
                            type='radio' 
                            name='rating' 
                            value={currentRating} 
                            onClick={() => setRating(currentRating)} 
                        />
                        <FaStar 
                            size={50} 
                            className='star' 
                            color={currentRating <= (hover || rating) ? '#f9dc4d' : '#53535b'}
                            onMouseEnter={() => setHover(currentRating)}
                            onMouseLeave={() => setHover(null)}
                        />
                    </label>
                )             
            })}
            <h2>Your rate is {rating}</h2>
        </div>
    )
}
*/
export default StarRating;


function StarRating(props) {
    // 分数显示
    const [rating, setRating] = React.useState(
      typeof props.rating == "number" ? props.rating : 0
    );
    const [isChosed, setChoice] = useState(true);
    const [message, setMessage] = React.useState('');
    const selection = 0;
    /*const messageF = () => {
        if(rating === 0) {
            setMessage('');
        } else if (rating === 1) {
            message = 'Terrible'
        } else if (rating === 2) {
            message = 'Normal'
        } else if (rating === 3) {
            message = 'Good'
        } else if (rating === 4) {
            message = 'Very Good'
        } else {
            message = 'Excellent'
        }
    }
    console.log(message);*/

    return (
        <div className='center'>
            <div className='wrapper'
                onClick={event => 
                    setRating(event.target.getAttribute("star-id") || rating)
                }
            >
            {[...new Array(5)].map((v, i) => (
                <Star
                starId={i + 1}
                key={i}
                onClick={() => {setChoice(!isChosed)}}
                className={isChosed ? 'yellow' : 'grey'}
                />           
            ))}
            
            </div>
            <h2>{message}</h2>
        </div>
    );
}
