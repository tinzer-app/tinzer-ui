import React, { FC } from 'react';

import { FolderIcon } from '@icons/FolderIcon';
import { ChecklistIcon } from '@icons/ChecklistIcon';
import { AnalyticsIcon } from '@icons/AnalyticsIcon';

import { LinkIconProps, NavItemIconType } from './types';

const SIZE = 24;

export const LinkIcon: FC<LinkIconProps> = ({ type, className }) => {
  switch (type) {
    case NavItemIconType.analytics: {
      return <AnalyticsIcon size={SIZE} className={className} />;
    }

    case NavItemIconType.folder: {
      return <FolderIcon size={SIZE} className={className} />;
    }

    case NavItemIconType.checklist: {
      return <ChecklistIcon size={SIZE} className={className} />;
    }

    default: {
      return null;
    }
  }
};
