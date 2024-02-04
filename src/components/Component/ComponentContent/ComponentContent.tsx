import React, { FC } from 'react';

import { Tag } from '@components/Tag';
import { Text } from '@components/Text';
import { Link } from '@components/Link';
import { Table } from '@components/Table';
import { Condition } from '@components/Condition';
import { PageSection } from '@components/PageSection';
import { TimestampComponent } from '@components/TimestampComponent';

import { Component } from '../Component';
import { ComponentContentProps, ComponentType } from './types';

export const ComponentContent: FC<ComponentContentProps> = ({ data }) => {
  switch (data.type) {
    case ComponentType.horizontalComponentsGroup: {
      return (
        <>
          {data.data.map((componentData, idx) => (
            <Component data={componentData} key={idx} />
          ))}
        </>
      );
    }

    case ComponentType.verticalComponentsGroup: {
      return (
        <>
          {data.data.map((componentData, idx) => (
            <Component data={componentData} key={idx} />
          ))}
        </>
      );
    }

    case ComponentType.tag: {
      return <Tag data={data.data} />;
    }

    case ComponentType.condition: {
      return <Condition data={data.data} />;
    }

    case ComponentType.timestamp: {
      return <TimestampComponent data={data.data} />;
    }

    case ComponentType.text: {
      return <Text {...data.data} />;
    }

    case ComponentType.pageSection: {
      return <PageSection data={data.data} />;
    }

    case ComponentType.link: {
      const { to, title, isInNewTab } = data.data;
      const target = isInNewTab ? '_blank' : undefined;

      return (
        !!title && (
          <Link href={to} target={target}>
            {title}
          </Link>
        )
      );
    }

    case ComponentType.table: {
      return <Table data={data.data} />;
    }

    default: {
      return null;
    }
  }
};
