import React from 'react';
import style from './ProductLists.module.css';

import { products } from '../../config';

import { Rating } from '../ui';

export type ProductListsProps = {
  className?: string;
};

const ProductLists: React.FC<ProductListsProps> = ({ className }) => {
  return (
    <ul className={`${style['product-list']} ${className || ''}`}>
      {products.map((product) => (
        <li key={product.name} className="flex flex-col gap-6">
          <img src={product.imgURL} alt={product.name} />

          <Rating value={4.5} />

          <div className="produt-detail">
            <div className="font-bold text-lg pb-2">{product.name}</div>
            <div className="font-bold text-lg text-coral-red">
              {product.price}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ProductLists;
