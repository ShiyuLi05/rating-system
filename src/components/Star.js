import { FaStar } from 'react-icons/fa';

function Star({ starId }) {
    return (
    
      <div star-id={starId} role="button" className='stars'>
        <FaStar
            size={50} 
            className='star'
            
        />
      </div>
    
    );
}
export default Star;



