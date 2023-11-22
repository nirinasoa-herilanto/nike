import React from 'react';
import style from './Hero.module.css';

import { bigShoe1 } from '../../../assets/images';
import { arrowRight } from '../../../assets/icons';

import Statistics from '../../Statistics';

export type HeroProps = {
  className?: string;
} & JSX.IntrinsicElements['section'];

const Hero: React.FC<HeroProps> = ({ className, ...rest }) => {
  return (
    <section className={`${style['hero']} ${className || ''}`} {...rest}>
      <div className="lg:pt-[118px]">
        <p className="text-coral-red">Our Summer collections</p>
        <h1 className="pt-8 font-bold text-[64px]">
          The New Arrival Nike Shoes
        </h1>
        <p className="py-8 text-gray-500 md:w-[80%]">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>

        <button className="w-[180px] p-3  text-white bg-coral-red rounded-full flex justify-between items-center gap-4 shadow-lg">
          <span>Shop now</span>
          <img src={arrowRight} alt="arrow right icon" />
        </button>

        <Statistics className="pt-8" />
      </div>

      <div
        className={`${style['hero__image']} bg-hero bg-cover  relative flex items-center justify-center`}
      >
        <img className="object-cover" src={bigShoe1} alt="nike 1" />
      </div>
    </section>
  );
};

export default Hero;
