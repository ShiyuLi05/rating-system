import './style/index.css';
import Star from './components/Star';
import StarRating from './components/StarRating';
import { useState } from 'react';

function App() {
  return (
    <main>
      <div className='container'>
        <StarRating />
      </div>
    </main>
  );
}

export default App;
