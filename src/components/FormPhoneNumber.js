import { Form, Input } from 'formik-antd';
import React from 'react';

function FormPhoneNumber(props) {
  const { name, label, _type, ...rest } = props;
  console.log(rest);
  return (
    <Form.Item name={name} {...rest}>
      <label htmlFor={name}>{label}</label>
      <Input name={name} className="styles_height35" />
    </Form.Item>
  );
}

export default FormPhoneNumber;
