import { GeneralItemData } from './common';

export interface StringsInFilesMatchingFile {
  path: string;
  patterns: string[];
}

interface StringInFileMatchingFile {
  path: string;
  pattern: string;
}

export enum ConditionType {
  fileExistence = 'fileExistence',
  stringsInFilesMatching = 'stringsInFilesMatching',
}

export type FileExistenceCondition = GenericCondition<ConditionType.fileExistence, string[]>;
export type StringsInFilesMatchingCondition = GenericCondition<
  ConditionType.stringsInFilesMatching,
  StringsInFilesMatchingFile[]
>;

export type ConditionData = FileExistenceCondition | StringsInFilesMatchingCondition;

export type SingleParamConditionData =
  | GenericCondition<ConditionType.fileExistence, string>
  | GenericCondition<ConditionType.stringsInFilesMatching, StringInFileMatchingFile>;

export interface GeneralConditionData extends GeneralItemData {
  conditions: ConditionData[];
}
