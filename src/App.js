import './style/index.css';
import StarRating from './components/StarRating';
import { useState } from 'react';
import Dialog from './components/Dialog';

function App() {
  const [dialogVisible, setDialogVisible] = useState(false);

  const hanleOpen = () => {
    setDialogVisible(!dialogVisible);
  };

  const dialogClosed = () => {
    setDialogVisible(false);
  };
  
  return (
    <main>
      <div className='container'>
        <StarRating />
        <input className={dialogVisible ? 'showing btn' : 'hiding btn'} type="button" value={dialogVisible ? 'Hide' : 'Show'} onClick={hanleOpen}/>
      </div>
      {dialogVisible && <Dialog isClosed={dialogClosed} /> }
    </main>
  );
}

export default App;


