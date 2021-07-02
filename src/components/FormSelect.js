import React from 'react';
import { Form, Select } from 'formik-antd';

const { Option } = Select;

function FormSelect(props) {
  const { name, label, options, ...rest } = props;
  return (
    <Form.Item name={name} {...rest}>
      <label htmlFor={name}>{label}</label>
      <Select name={name}>
        {options.map((option) => {
          return (
            <Option
              key={option.value}
              value={option.key}
              placeholder="Select your gender">
              {option.key}
            </Option>
          );
        })}
      </Select>
    </Form.Item>
  );
}

export default FormSelect;
