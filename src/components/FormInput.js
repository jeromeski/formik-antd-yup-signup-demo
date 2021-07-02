import { Form, Input } from 'formik-antd';
import React from 'react';

function FormInput(props) {
  const { name, label, _placeholder, ...rest } = props;
  return (
    <Form.Item name={name} {...rest}>
      <label htmlFor={name}>{label}</label>
      <Input name={name} placeholder={_placeholder} />
    </Form.Item>
  );
}

export default FormInput;
