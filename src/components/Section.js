import React from 'react';

export function Section({ side = 'left', img, topic = ' ', children }) {
  return (
    <div
      className={`flex p-6 items-center ${
        side === 'left' ? 'flex-row' : 'flex-row-reverse'
      }`}
    >
      <div className='p-4'>
        <p className='font-comfortaa font-bold text-3xl p-3 text-white'>
          {topic}
        </p>
        <div className='w-72'>
          {img && <img src={require(`../assets/${img}`)} alt='elo' />}
        </div>
      </div>
      <div className='h-full w-px bg-violet shadow-violet'></div>
      <div className={`p-4 ${side !== 'left' ? 'text-right' : 'text-left'}`}>
        {children}
      </div>
    </div>
  );
}
