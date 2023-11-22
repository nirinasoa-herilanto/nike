import React from 'react';
import style from './AboutUs.module.css';

import { shoe8 } from '../../../assets/images';
import { aboutWording } from './about.wording';

export type AboutUsProps = {
  className?: string;
} & JSX.IntrinsicElements['section'];

const AboutUs: React.FC<AboutUsProps> = ({ className }) => {
  return (
    <section className={`${style['about-us']} ${className || ''}`}>
      <div className="about-us__detail flex flex-col gap-6">
        <h1 className="text-[48px] font-bold">
          We Provide You Super Quality Shoes
        </h1>

        <p className="text-gray-500 text-justify">
          {aboutWording.paragraphOne}
        </p>

        <p className="text-gray-500">{aboutWording.paragraphTwo}</p>

        <button className="w-[180px] p-3  text-white bg-coral-red rounded-full flex justify-center shadow-lg">
          View detail
        </button>
      </div>

      <figure className="flex justify-center items-center">
        <img src={shoe8} width={570} height={522} alt="nike shoe" />
      </figure>
    </section>
  );
};

export default AboutUs;
