import React, { FC } from 'react';

import { Text, TextData } from '@components/Text';

import { Subtitle } from './styled';
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
      <Text {...titleData} key="-1">
        {title.value}
      </Text>
      {subtitles?.map((subtitle, idx) => {
        const subtitleData: TextData = {
          variant: 'body2Regular',
          textColor: 'textSecondary',
          ...subtitle,
        };

        return (
          <Subtitle {...subtitleData} key={idx}>
            {subtitle.value}
          </Subtitle>
        );
      })}
    </>
  );
};
