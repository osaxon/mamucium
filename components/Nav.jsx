import Link from 'next/link';
import Image from 'next/image';
import Logo from '../public/img/logo.png';

const links = [
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/projects', label: 'Projects' },
];

export default function Nav() {
  return (
    <header className='sticky top-0 z-50 bg-dark flex-grow-0'>
      <nav className=''>
        <ul className='flex flex-col md:flex-row items-center justify-between py-4 layout text-white'>
          <li>
            <div className='flex md:flex-row flex-col flex-shrink-0 items-center'>
              <Link href='/'>
                <a>
                  <Image
                    src={Logo}
                    width='85%'
                    height='85%'
                    objectFit='contain'
                  />
                </a>
              </Link>
              <h2 className='uppercase font-serif'>Mancvnivm</h2>
            </div>
          </li>
          <ul className='flex items-center justify-between space-x-4'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <Link href={href}>
                  <a className='text-white hover:text-green-400'>{label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </ul>
      </nav>
    </header>
  );
}
