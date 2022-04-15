import React from 'react';

export function HammImg() {
  return (
    <div className=' py-12  ' style={{ height: 600 }}>
      <div className='relative h-full'>
        <img
          src={require('../assets/hamm_face.png')}
          alt='angry hamm'
          className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-2/3'
        />
        <img
          src={require('../assets/bit_hamm.png')}
          alt='hamm'
          className='hamm-animation absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full '
        />
      </div>
    </div>
  );
}
