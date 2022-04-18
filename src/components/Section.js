import React from 'react';

export function Section({ side = 'left', img, topic = ' ', children }) {
  return (
    <section className='w-4/5 mx-auto '>
      <p className='p-4 font-bold text-3xl  text-white text-left'>{topic}</p>
      <div className='p-4 text-left'>{children}</div>
    </section>
  );
}
