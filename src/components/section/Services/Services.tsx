import React from 'react';
import style from './Services.module.css';

import { services } from '../../../config';

export type ServicesProps = {
  className?: string;
} & JSX.IntrinsicElements['section'];

const Services: React.FC<ServicesProps> = ({ className, ...rest }) => {
  return (
    <section className={`${style['services']} ${className || ''}`} {...rest}>
      <ul>
        {services.map((service) => (
          <li
            className="p-4 flex-1 bg-white rounded-[30px] shadow-3xl"
            key={service.label}
          >
            <div className="w-11 h-11 p-2 bg-coral-red rounded-full">
              <img
                src={service.imgURL}
                width={50}
                height={50}
                alt={service.label}
              />
            </div>
            <h3 className="my-3 text-3xl font-bold">{service.label}</h3>
            <p className="text-gray-500">{service.subtext}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Services;
