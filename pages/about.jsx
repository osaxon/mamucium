import React from 'react';
import Seo from '@/components/Seo';
import Image from 'next/image';

import Tunnel from '../public/img/tunnel.jpg';

const about = () => {
  return (
    <>
      <Seo templateTitle='About' />
      <section className='flex-grow flex mb-auto'>
        <article className='layout py-10 text-white'>
          <div className='flex justify-center md:justify-start md:text-left cursor-default'>
            <div className='w-2/3'>
              <h1 className='mb-4'>About</h1>
              <h4 className='text-justify'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                tempore qui eius et tempora facere eaque praesentium pariatur ex
                quam?
              </h4>
            </div>
            <div className='flex-shrink-0'></div>
          </div>
        </article>
      </section>
    </>
  );
};

export default about;
