import { ConditionType } from '@global/types';
import { InputType, ModalFormData } from '@components/EditDataModal';

export const getIsConditionsInFormValid = (formData: ModalFormData) =>
  Object.values(formData).reduce((isFormValid, curData) => {
    if (!isFormValid) {
      return false;
    }

    if (curData.type === InputType.condition) {
      return curData.data.conditions.reduce((isConditionValid, condition) => {
        if (!isConditionValid) {
          return false;
        }

        if (condition.type === ConditionType.fileExistence) {
          return condition.params.every(path => !!path);
        }

        return condition.params.every(
          ({ path, patterns }) => !!path && patterns.every(pattern => !!pattern),
        );
      }, true);
    }

    return true;
  }, true);
