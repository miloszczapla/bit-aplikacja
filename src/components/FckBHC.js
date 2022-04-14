import React from 'react';
import { genereteArrayOfRandomPosiions } from './genereteArrayOfRandomPosiions';

export function FckBHC() {
  return (
    <div className='fixed top-20 w-full'>
      {genereteArrayOfRandomPosiions(50).map((randomPosition, id) => (
        <OneFck {...randomPosition} key={id} />
      ))}
    </div>
  );
}

export function OneFck({ moveDown = 0 }) {
  const shadows = [
    '0px 0px 20px 0px #f72585',
    '0px 0px 20px 0px #4cefd8',
    '0px 0px 40px 10px #673ab7',
  ];

  return (
    <div
      className='text-center text-3xl text-black bg-grey absolute w-min p-6 whitespace-nowrap animatedEl -ml-72'
      style={{
        top: moveDown,
        boxShadow: shadows[moveDown % 3],
      }}
    >
      <span className='z-20 relative'>Jebać BHC 💩</span>
      <div className='rotatedEl z-10'></div>
    </div>
  );
}
