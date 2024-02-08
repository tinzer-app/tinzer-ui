import React, { FC } from 'react';

import { ConditionType } from '@global/types';
import { InputType, useEditDataModalContext } from '@components/EditDataModal';

import { TreeStructure } from './styled';
import { ConditionInputProps } from './types';
import { AVAILABLE_CONDITION_TYPES } from './constants';
import {
  getNodes,
  OnChangePathExistenceCondition,
  OnChangePatternMatchingCondition,
  OnDeletePatternMatchingCondition,
  onAddCondition as onAddConditionCore,
  onDeleteCondition as onDeleteConditionCore,
  onAddPathToMatchingCondition as onAddPathToMatchingConditionCore,
  onDeletePathMatchingCondition as onDeletePathMatchingConditionCore,
  onAddPathToExistenceCondition as onAddPathToExistenceConditionCore,
  onChangePathMatchingCondition as onChangePathMatchingConditionCore,
  onDeletePathExistenceCondition as onDeletePathExistenceConditionCore,
  onAddStringToMatchingCondition as onAddStringToMatchingConditionCore,
  onChangePathExistenceCondition as onChangePathExistenceConditionCore,
  onChangePatternMatchingCondition as onChangePatternMatchingConditionCore,
  onDeletePatternMatchingCondition as onDeletePatternMatchingConditionCore,
} from './utils';

export const ConditionInput: FC<ConditionInputProps> = ({ id }) => {
  const { formData, setFormData } = useEditDataModalContext() || {};

  const formItem = formData?.[id];
  const conditions = formItem?.type === InputType.condition ? formItem.data.conditions : [];
  const isPossibleToAddCondition = conditions?.length !== AVAILABLE_CONDITION_TYPES.length;

  const onAddCondition = () => onAddConditionCore({ setFormData, id });
  const onAddPathToMatchingCondition = () => onAddPathToMatchingConditionCore({ setFormData, id });
  const onAddPathToExistenceCondition = () =>
    onAddPathToExistenceConditionCore({ setFormData, id });
  const onAddStringToMatchingCondition = (pathIdx: number) =>
    onAddStringToMatchingConditionCore({ pathIdx, setFormData, id });

  const onChangePathExistenceCondition: OnChangePathExistenceCondition = params =>
    onChangePathExistenceConditionCore({ ...params, setFormData, id });
  const onChangePathMatchingCondition: OnChangePathExistenceCondition = params =>
    onChangePathMatchingConditionCore({ ...params, setFormData, id });
  const onChangePatternMatchingCondition: OnChangePatternMatchingCondition = params =>
    onChangePatternMatchingConditionCore({ ...params, setFormData, id });

  const onDeleteCondition = (type: ConditionType) =>
    onDeleteConditionCore({ setFormData, id, type });
  const onDeletePathExistenceCondition = (pathIdx: number) =>
    onDeletePathExistenceConditionCore({ setFormData, id, pathIdx });
  const onDeletePathMatchingCondition = (pathIdx: number) =>
    onDeletePathMatchingConditionCore({ setFormData, id, pathIdx });
  const onDeletePatternMatchingCondition: OnDeletePatternMatchingCondition = params =>
    onDeletePatternMatchingConditionCore({ setFormData, id, ...params });

  const nodes = getNodes({
    conditions,
    isPossibleToAddCondition,
    onAddCondition,
    onAddPathToMatchingCondition,
    onAddPathToExistenceCondition,
    onAddStringToMatchingCondition,
    onChangePathExistenceCondition,
    onChangePathMatchingCondition,
    onChangePatternMatchingCondition,
    onDeleteCondition,
    onDeletePathExistenceCondition,
    onDeletePathMatchingCondition,
    onDeletePatternMatchingCondition,
  });

  return <TreeStructure nodes={nodes} />;
};
