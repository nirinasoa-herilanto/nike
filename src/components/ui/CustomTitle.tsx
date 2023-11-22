import React from 'react';

export type CustomTitleProps = {
  className?: string;
  label: string;
} & JSX.IntrinsicElements['h1'];

const CustomTitle: React.FC<CustomTitleProps> = ({
  className,
  label,
  ...rest
}) => {
  return (
    <h1 className={`pt-8 font-bold text-4xl ${className || ''}`} {...rest}>
      {label}
    </h1>
  );
};

export default CustomTitle;
