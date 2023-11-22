import React from 'react';
import style from './ProductLists.module.css';

import { products } from '../../config';
import { star } from '../../assets/icons';

export type ProductListsProps = {
  className?: string;
};

const ProductLists: React.FC<ProductListsProps> = ({ className }) => {
  return (
    <ul className={`${style['product-list']} ${className || ''}`}>
      {products.map((product) => (
        <li key={product.name} className="flex flex-col gap-6">
          <img src={product.imgURL} alt={product.name} />

          <div className="rating flex items-center gap-2">
            <img src={star} width={20} height={20} alt="rating" />
            <span>{'(4.5)'}</span>
          </div>

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
