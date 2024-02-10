import React, { FC, useCallback } from 'react';

import { Layout } from '@components/Layout';
import { Search, SearchConfig } from '@components/Search';

import { Item } from './Item';
import { useSearchItemsData } from './data';
import { PopoverContentProps } from './types';
import { SearchWrapper, Wrapper } from './styled';

const SEARCH_CONFIG: SearchConfig = {
  placeholder: 'введите название',
  delayMs: 1500,
};

export const PopoverContent: FC<PopoverContentProps> = ({ config, inputId }) => {
  const { data, isFetching, error, setQueryParams } = useSearchItemsData({ config });

  const onSearchChange = useCallback(
    (searchValue: string) => setQueryParams(prev => ({ ...prev, searchValue })),
    [setQueryParams],
  );

  const { items } = data || {};
  const isDataEmpty = !items?.length;

  return (
    <Wrapper>
      <SearchWrapper>
        <Search config={SEARCH_CONFIG} onChange={onSearchChange} />
      </SearchWrapper>
      <Layout error={error} isLoading={isFetching} isDataEmpty={isDataEmpty}>
        {items?.map((itemData, idx) => <Item data={itemData} key={idx} inputId={inputId} />)}
      </Layout>
    </Wrapper>
  );
};
