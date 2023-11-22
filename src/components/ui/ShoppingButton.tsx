import React from 'react';

import { arrowRight } from '../../assets/icons';

export type ShoppingButtonProps = {
  className?: string;
} & JSX.IntrinsicElements['button'];

const ShoppingButton: React.FC<ShoppingButtonProps> = ({
  className,
  ...rest
}) => {
  return (
    <button className={`shopping-btn ${className || ''}`} {...rest}>
      <span>Shop now</span>
      <img src={arrowRight} alt="arrow right icon" />
    </button>
  );
};

export default ShoppingButton;
