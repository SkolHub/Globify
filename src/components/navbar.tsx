import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className='fixed flex h-20 w-screen p-4'>
      <Image
        src='/schoolhub-globify.png'
        alt='logo'
        width='350'
        height='80'
        className='object-contain'
      />
    </nav>
  );
}
