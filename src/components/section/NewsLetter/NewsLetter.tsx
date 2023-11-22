import React from 'react';
import style from './NewsLetter.module.css';

import { CustomTitle } from '../../ui';

export type NewsLetterProps = {
  className?: string;
} & JSX.IntrinsicElements['section'];

const NewsLetter: React.FC<NewsLetterProps> = ({ className, ...rest }) => {
  return (
    <section className={`${style['news-letter']} ${className || ''}`} {...rest}>
      <CustomTitle
        className="lg:text-[38px]"
        label="Sign Up for Updates & Newsletter"
      />

      <div className={`${style['news-letter__subscribe']}`}>
        <input
          className={style['input']}
          type="email"
          placeholder="subscribe@mail.com"
        />
        <button className="w-[180px] p-3  text-white bg-coral-red rounded-full shadow-lg">
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default NewsLetter;
