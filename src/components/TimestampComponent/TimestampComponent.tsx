import React, { FC } from 'react';
import { format, parseISO } from 'date-fns';

import { Time, DateComponent } from './styled';
import { TimestampComponentProps } from './types';

const SEP = '|';

export const TimestampComponent: FC<TimestampComponentProps> = ({ data, className }) => {
  const { timestamp } = data;

  const [date, time] = format(parseISO(timestamp), `dd.MM.yyyy${SEP}kk:mm`).split(SEP);

  return (
    <div className={className}>
      <DateComponent dateTime={date}>{date}</DateComponent>
      <Time dateTime={time}>{time}</Time>
    </div>
  );
};
