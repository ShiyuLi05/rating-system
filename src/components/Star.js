import { FaStar } from 'react-icons/fa';

function Star({ func = f => f, isSelected}) {
    return (
      <div className='stars'>
        <FaStar
            onClick={func}
            color={isSelected ? '#f9dc4d' : '#53535b'}
            size={50}
        />
      </div>
    
    );
}
export default Star;



