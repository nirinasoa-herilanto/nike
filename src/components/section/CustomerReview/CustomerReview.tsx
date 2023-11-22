import React from 'react';
import style from './CustomerReview.module.css';

import { reviews } from '../../../config';

import { CustomTitle } from '../../ui';
import { ReviewLists } from '../../Review';

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

      <ReviewLists reviews={reviews} />
    </section>
  );
};

export default CustomerReview;
