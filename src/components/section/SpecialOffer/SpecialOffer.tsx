import React from 'react';
import style from './SpecialOffer.module.css';

import { offer } from '../../../assets/images';
import { arrowRight } from '../../../assets/icons';

import { CustomTitle } from '../../ui';
import { specialOfferWording } from './special-offer.wording';

export type SpecialOfferProps = {
  className?: string;
} & JSX.IntrinsicElements['section'];

const SpecialOffer: React.FC<SpecialOfferProps> = ({ className, ...rest }) => {
  return (
    <section
      className={`${style['special-offer']} ${className || ''}`}
      {...rest}
    >
      <figure className="flex-1">
        <img src={offer} width={773} height={687} alt="special offer" />
      </figure>

      <div className="flex flex-1 flex-col">
        <CustomTitle label="Special offer" />
        <p className="mt-4 text-gray-500 text-justify">
          {specialOfferWording.paragraphOne}
        </p>
        <p className="mt-4 text-gray-500 text-justify">
          {specialOfferWording.paragraphTwo}
        </p>

        <div className="mt-8 flex gap-4">
          <button className="w-[180px] p-3  text-white bg-coral-red rounded-full flex justify-between items-center gap-4">
            <span>Shop now</span>
            <img src={arrowRight} alt="arrow right icon" />
          </button>

          <button className="w-[180px] p-3 border-[1px] border-slate-gray text-slate-gray rounded-full text-center">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
