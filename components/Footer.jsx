import CustomLink from '@/components/CustomLink';

const Footer = () => {
  return (
    <footer className='flex-grow-0'>
      <div className='flex flex-col items-center justify-center text-white layout'>
        <div className='absolute text-gray-500 bottom-2'>
          © {new Date().getFullYear()} By{' '}
          <CustomLink href='/'>Oliver Saxon</CustomLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
