import Link from 'next/link';

const NavLink = ({ text, path }) => {
    return (
      <Link href={path} className='link-nav'>
        {text}
      </Link>
    );
};

export default NavLink;