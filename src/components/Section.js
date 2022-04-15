import React from 'react';

export function Section({ side = 'left', img, topic = ' ', children }) {
  return (
    <div
      className={`flex p-6   ${
        side === 'left' ? 'flex-row' : 'flex-row-reverse'
      }`}
    >
      <div className='p-4 '>
        <p className='font-comfortaa font-bold text-3xl p-3 text-white'>
          {topic}
        </p>
        <div className='w-72'>
          {img && <img src={require(`../assets/${img}`)} alt='elo' />}
        </div>
      </div>
      <div className='h-50 w-px shadow-violet bg-blue border-l border-blue'></div>
      <div className={`p-4  ${side !== 'left' ? 'text-right ' : 'text-left '}`}>
        {children}
      </div>
    </div>
  );
}
