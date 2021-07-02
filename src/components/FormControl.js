import React from 'react';
import FormAreaCode from './FormAreaCode';
import FormCheckbox from './FormCheckbox';
import FormDate from './FormDate';
import FormInput from './FormInput';
import FormPassword from './FormPassword';
import FormPhone from './FormPhone';
import FormSelect from './FormSelect';

function FormControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case 'input': {
      return <FormInput {...rest} />;
    }
    case 'password': {
      return <FormPassword {...rest} />;
    }
    case 'gender': {
      return <FormSelect {...rest} />;
    }
    case 'date': {
      return <FormDate {...rest} />;
    }
    case 'phone': {
      return <FormPhone {...rest} />;
    }
    case 'areaCode': {
      return <FormAreaCode />;
    }
    case 'checkbox': {
      return <FormCheckbox />;
    }
    default:
      return null;
  }
}

export default FormControl;
