import React from 'react';
import { reviews } from '../../config';
import ReviewItem from './ReviewItem';

export type ReviewListsProps = {
  className?: string;
  reviews: typeof reviews;
};

const ReviewLists: React.FC<ReviewListsProps> = ({ className, reviews }) => {
  return (
    <ul
      className={`mt-24 flex flex-col gap-14 justify-evenly items-center md:flex-row ${
        className || ''
      }`}
    >
      {reviews.map((review) => (
        <ReviewItem key={review.customerName} review={review} />
      ))}
    </ul>
  );
};

export default ReviewLists;
