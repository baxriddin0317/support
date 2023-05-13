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
    title: 'google account',
  },
  {
    id: 3,
    imgName: 'youtube',
    title: 'youTube',
  },
  {
    id: 4,
    imgName: 'gmail',
    title: 'gmail',
  },
];

const Cards = () => {
  return (
    <section className='max-w-4xl py-20 mx-auto px-5'>
      <div className='max-w-3xl mx-auto space-y-6 mb-24'>
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
    </section>
  );
};

export default Cards;

const Card = ({ data }) => {
  return (
    <div className='border border-gray-300 rounded-lg hover:shadow-lg transition-shadow duration-200 py-5 px-8'>
      <div className='flex items-center space-x-4'>
        <div className='max-w-[4rem] shrink-0'>
          <img
            className='w-full h-full object-contain'
            src={require(`../assets/${data.imgName}.png`)}
            alt={data.title}
          />
        </div>

        <div className='text-blue-800 '>
          <h3 className='text-xl font-medium'>{data.title}</h3>
          <p className='mt-1'>This is more infomation</p>
        </div>
      </div>

      <div className='flex items-center justify-between px-4 mt-8'>
        <Link to='/' className='text-center text-blue-800'>
          Link to learn more
        </Link>
        <Link to='/' className='text-center text-blue-800'>
          Link to schedule more
        </Link>
      </div>
    </div>
  );
};
