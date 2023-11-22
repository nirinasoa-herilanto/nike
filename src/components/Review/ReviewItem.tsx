import React from 'react';

import { reviews } from '../../config';

import { Rating } from '../ui';

export type ReviewItemProps = {
  className?: string;
  review: (typeof reviews)[0];
};

const ReviewItem: React.FC<ReviewItemProps> = ({ className, review }) => {
  return (
    <li
      className={`flex flex-1 flex-col gap-4 justify-center items-center ${
        className || ''
      }`}
      key={review.customerName}
    >
      <img
        className="w-[120px] h-[120px] object-cover rounded-full"
        src={review.imgURL}
        alt={review.customerName}
      />
      <p className="text-gray-500 text-center xl:max-w-md">
        {review.feedback.slice(0, 90) + ' ...'}
      </p>
      <Rating value={review.rating} />
      <h3 className="text-3xl font-bold">{review.customerName}</h3>
    </li>
  );
};

export default ReviewItem;
