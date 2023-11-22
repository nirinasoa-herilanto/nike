import React from 'react';

import { star } from '../../assets/icons';

export type RatingProps = {
  className?: string;
  value: number;
};

const Rating: React.FC<RatingProps> = ({ className, value }) => {
  return (
    <div className={`rating flex items-center gap-2 ${className || ''}`}>
      <img src={star} width={20} height={20} alt="rating" />
      <span>{`(${value})`}</span>
    </div>
  );
};

export default Rating;
