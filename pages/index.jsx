import Seo from '@/components/Seo';
import CustomLink from '@/components/CustomLink';
import Image from 'next/image';
import Logo from '../public/img/logo.png';

export default function Home() {
  return (
    <>
      <Seo templateTitle='Home' />
      <main className='flex-grow flex'>
        <div className='flex flex-col items-center justify-center text-white layout'>
          <h1>This is Manchester</h1>
          <h2>
            Read more <CustomLink href='/about'>here</CustomLink>
          </h2>
          <Image src={Logo} width='100%' height='100%' objectFit='contain' />
        </div>
      </main>
    </>
  );
}
