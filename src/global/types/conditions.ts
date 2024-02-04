interface StringsInFilesMatchingFile {
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

export type ConditionData =
  | GenericCondition<ConditionType.fileExistence, string[]>
  | GenericCondition<ConditionType.stringsInFilesMatching, StringsInFilesMatchingFile[]>;

export type SingleParamConditionData =
  | GenericCondition<ConditionType.fileExistence, string>
  | GenericCondition<ConditionType.stringsInFilesMatching, StringInFileMatchingFile>;
