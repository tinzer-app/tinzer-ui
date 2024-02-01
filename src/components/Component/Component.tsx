import React, { FC } from 'react';

import { Tag } from '@components/Tag';
import { Text } from '@components/Text';
import { Link } from '@components/Link';
import { Table } from '@components/Table';
import { PageSection } from '@components/PageSection';

import { HorizontalGroup } from './styled';
import { ComponentProps, ComponentType } from './types';

export const Component: FC<ComponentProps> = ({ data }) => {
  switch (data.type) {
    case ComponentType.horizontalComponentsGroup: {
      return (
        <HorizontalGroup>
          {data.data.map((componentData, idx) => (
            <Component data={componentData} key={idx} />
          ))}
        </HorizontalGroup>
      );
    }

    case ComponentType.verticalComponentsGroup: {
      return (
        <div>
          {data.data.map((componentData, idx) => (
            <Component data={componentData} key={idx} />
          ))}
        </div>
      );
    }

    case ComponentType.tag: {
      return <Tag data={data.data} />;
    }

    case ComponentType.text: {
      return <Text {...data.data} />;
    }

    case ComponentType.pageSection: {
      return <PageSection data={data.data} />;
    }

    case ComponentType.link: {
      const { to, title } = data.data;

      return !!title && <Link href={to}>{title}</Link>;
    }

    case ComponentType.table: {
      return <Table data={data.data} />;
    }

    default: {
      return null;
    }
  }
};
