import React, { useState }from 'react';
import Star from './Star';

function StarRating() {
    const [rating, setRating] = useState('');
    const [selectedI, setSelectedI] = useState(-1);

    const message = [
        'Terrible',
        'Normal',
        'Good',
        'Very Good',
        'Excellent'
    ];

    function resetRating(v, i) {
        setRating(v);
        setSelectedI(i);
    }

    return (
        <section className='star-rating'>
            <div className='wrapper'>
                {message.map((v, i) => (
                    <Star 
                        key={i}
                        func={() => resetRating(v, i)}
                        isSelected={i <= selectedI}
                    />
                ))}
            </div>
            <h2>{rating}</h2>
        </section>
    )
}

export default StarRating