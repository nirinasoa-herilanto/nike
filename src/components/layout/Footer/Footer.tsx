import style from './Footer.module.css';

import { footerLinks } from '../../../config';

import Logo from '../../ui/Logo';
import { footerWording } from './footer.wording';
import { facebook, instagram, twitter } from '../../../assets/icons';

const Footer = () => {
  return (
    <footer className={`${style['footer']}`}>
      <div className="fit pb-16 text-white flex flex-wrap justify-between gap-16 lg:flex-nowrap:gap-40">
        <div className="lg:w-[350px]">
          <Logo className="pb-8" hasFooterLogo />
          <p>{footerWording.paragraph}</p>

          <div className="social-media pt-8 flex items-center gap-4">
            <figure className="p-2 bg-white rounded-full">
              <img src={facebook} alt="facebook" />
            </figure>
            <figure className="p-2 bg-white rounded-full">
              <img src={twitter} alt="facebook" />
            </figure>
            <figure className="p-2 bg-white rounded-full">
              <img src={instagram} alt="facebook" />
            </figure>
          </div>
        </div>

        <ul className="flex flex-wrap justify-between gap-10  md:w-full lg:w-[inherit]">
          {footerLinks.map((footerLink) => (
            <li key={footerLink.title}>
              <h4 className="text-[22px] pb-4">{footerLink.title}</h4>

              <nav>
                <ul className="flex flex-col gap-2">
                  {footerLink.links.map((item) => (
                    <li key={item.name}>
                      <a className="hover:text-gray-600" href={item.link}>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </li>
          ))}
        </ul>
      </div>

      <div className="fit text-white flex flex-wrap justify-between gap-4">
        <div>&copy; Copyright. All rights reserved.</div>
        <div>Terms & Conditions</div>
      </div>
    </footer>
  );
};

export default Footer;
