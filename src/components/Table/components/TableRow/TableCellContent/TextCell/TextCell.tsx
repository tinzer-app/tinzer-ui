import React, { FC } from 'react';

import { TextData } from '@components/Text';

import { Title, Subtitle } from './styled';
import { TextCellProps } from './types';

export const TextCell: FC<TextCellProps> = ({ data }) => {
  const { title, subtitles } = data;

  const titleData: TextData = {
    variant: 'body2Regular',
    textColor: 'textPrimary',
    ...title,
  };

  return (
    <>
      <Title {...titleData} key="-1" />
      {subtitles?.map((subtitle, idx) => {
        const subtitleData: TextData = {
          variant: 'body2Regular',
          textColor: 'textSecondary',
          ...subtitle,
        };

        return <Subtitle {...subtitleData} key={idx} />;
      })}
    </>
  );
};
