import React from 'react';
import style from './PopularProducts.module.css';

import { CustomTitle } from '../../ui';

import { ProductLists } from '../../Products';

export type PopularProductsProps = {
  className?: string;
} & JSX.IntrinsicElements['section'];

const PopularProducts: React.FC<PopularProductsProps> = ({
  className,
  ...rest
}) => {
  return (
    <section
      className={`${style['popular-products']} ${className || ''}`}
      {...rest}
    >
      <CustomTitle className="pb-6" label="Our popular products" />
      <p className="md:w-[50%] text-gray-500">
        Experience top-notch quality and style with our sought-after selections.
        Discover a world of comfort, design, and value
      </p>

      <ProductLists className="pt-10" />
    </section>
  );
};

export default PopularProducts;
