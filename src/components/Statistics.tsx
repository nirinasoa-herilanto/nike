import React from 'react';

import { statistics } from '../config';

export type StatisitcsProps = {
  className?: string;
};

const Statistics: React.FC<StatisitcsProps> = ({ className }) => {
  return (
    <div className={`${className || ''} flex flex-wrap items-center gap-8`}>
      {statistics.map((statistic) => (
        <div className="flex flex-col gap-2 items-center" key={statistic.label}>
          <span className="text-3xl font-bold">{statistic.value}</span>
          <span>{statistic.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Statistics;
