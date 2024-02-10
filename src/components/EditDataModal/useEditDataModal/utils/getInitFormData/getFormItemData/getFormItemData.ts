import { InputConfig, InputData, InputType } from '@components/EditDataModal';

export const getFormItemData = (inputConfig: InputConfig): InputData => {
  switch (inputConfig.type) {
    case InputType.text: {
      return {
        type: inputConfig.type,
        data: {
          value: inputConfig.data.initValue || '',
          isRequired: inputConfig.data.isRequired,
        },
      };
    }

    case InputType.search: {
      return {
        type: inputConfig.type,
        data: {
          items: inputConfig.data.initItems,
        },
      };
    }

    default: {
      return {
        type: inputConfig.type,
        data: {
          conditions: inputConfig.data,
        },
      };
    }
  }
};
