import React from 'react';
import style from './CustomerReview.module.css';
import { CustomTitle } from '../../ui';
import { reviews } from '../../../config';
import { star } from '../../../assets/icons';

export type CustomerReviewProps = {
  className?: string;
} & JSX.IntrinsicElements['section'];

const CustomerReview: React.FC<CustomerReviewProps> = ({
  className,
  ...rest
}) => {
  return (
    <section
      className={`${style['customer-review']} ${className || ''}`}
      {...rest}
    >
      <CustomTitle className="text-center" label="What Our Customers Say?" />
      <p className="mt-8 text-gray-500 text-center">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>

      <ul className="mt-24 flex flex-col gap-14 justify-evenly items-center md:flex-row">
        {reviews.map((review) => (
          <li
            className="flex flex-1 flex-col gap-4 justify-center items-center"
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
            <div className="rating flex items-center gap-2">
              <img src={star} width={20} height={20} alt="rating" />
              <span>({review.rating})</span>
            </div>
            <h3 className="text-3xl font-bold">{review.customerName}</h3>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CustomerReview;
