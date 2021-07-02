import { Form, Input } from 'formik-antd';
import React from 'react';
import PhoneInput from 'react-phone-input-2';

function FormAreaCode(props) {
  const { name, label, _placeholder, formik, ...rest } = props;
  console.log(formik);
  const { setFieldValue, field } = formik;
  return (
    <Form.Item name={name} {...rest}>
      <label htmlFor={name}>{label}</label>
      <PhoneInput
        name={name}
        country={'ph'}
        {...field}
        onChange={(value) => setFieldValue(name, value)}
      />
    </Form.Item>
  );
}

export default FormAreaCode;
