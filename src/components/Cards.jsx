import React from 'react';
import { Link } from 'react-router-dom';

const cardsData = [
  {
    id: 1,
    imgName: 'chrome',
    title: 'Google Chrome',
  },
  {
    id: 2,
    imgName: 'account',
    title: 'Google account',
  },
  {
    id: 3,
    imgName: 'youtube',
    title: 'YouTube',
  },
  {
    id: 4,
    imgName: 'gmail',
    title: 'Gmail',
  },
];

const Cards = () => {
  return (
    <section className='max-w-4xl py-20 mx-auto px-5'>
      <div className='max-w-3xl mx-auto space-y-6 mb-16'>
        {cardsData.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </div>

      {/* Bottom Line */}
      <div className='relative w-full h-px bg-gray-400'>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-14 h-14 rounded-full bg-white border border-gray-300 shadow-lg'>
          <svg
            width={30}
            height={30}
            fill='#0b57d0'
            aria-hidden='true'
            viewBox='0 0 24 24'>
            <path d='M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z'></path>
          </svg>
        </div>
      </div>

      <div className='max-w-3xl mx-auto px-5 text-center mt-12'>
        <h3 className='text-2xl'>Lorem ipsum dolor sit amet</h3>
        <p className='mt-3'>
          consectetur adipisicing elit. Enim dignissimos distinctio rerum
          asperiores temporibus aut quia nam accusamus reiciendis perspiciatis.
          Quos corporis iste laudantium vero itaque culpa eos
        </p>
      </div>
    </section>
  );
};

export default Cards;

const Card = ({ data }) => {
  return (
    <div className='border border-gray-300 rounded-lg hover:shadow-lg transition-shadow duration-200 py-5 px-8'>
      <div className='flex items-start space-x-4'>
        <div className='max-w-[4rem] shrink-0'>
          <img
            className='w-full object-contain'
            src={require(`../assets/${data.imgName}.png`)}
            alt={data.title}
          />
        </div>

        <div className='flex-1 text-blue-800 '>
          <h3 className='text-xl font-medium'>{data.title}</h3>
          <p className='mt-1'>This is more infomation</p>

          <div className='flex items-center justify-between mt-8'>
            <Link to='/'>Link to learn more</Link>
            <Link to='/'>Link to schedule more</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
