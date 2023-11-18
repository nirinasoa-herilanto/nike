import { hamburger } from '../../../assets/icons';

import Logo from '../../ui/Logo';
import { MainNavigation } from '../MainNavigation';

const Header = () => {
  return (
    <header className="p-10 lg:px-12">
      <div className="fit flex justify-between items-center">
        <Logo />
        <MainNavigation className="hidden lg:block" />

        <button className="text-[20px] text-bold hidden lg:block" disabled>
          Sign in / Explore now
        </button>

        <img
          className="lg:hidden"
          src={hamburger}
          width={22}
          height={22}
          alt="burger"
        />
      </div>
    </header>
  );
};

export default Header;
