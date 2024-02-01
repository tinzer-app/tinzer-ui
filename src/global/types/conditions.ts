interface StringsInFilesMatchingFile {
  path: string;
  patterns: string[];
}

export enum ConditionType {
  fileExistence = 'fileExistence',
  stringsInFilesMatching = 'stringsInFilesMatching',
}

export type ConditionData =
  | GenericCondition<ConditionType.fileExistence, string[]>
  | GenericCondition<ConditionType.stringsInFilesMatching, StringsInFilesMatchingFile[]>;
