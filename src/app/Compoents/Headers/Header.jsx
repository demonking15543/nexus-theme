import Navbar from './Navbar';

import  Link  from 'next/link';

const Header = () => {
  return (
    <header>
      <div className="nav-area">
        <Link href="/" className="logo">
          Logo
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;