import React from 'react';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Form, Input } from 'formik-antd';

function FormPassword(props) {
  const { name, label, _placeholder, ...rest } = props;
  return (
    <Form.Item name={name} {...rest}>
      <label htmlFor={name}>{label}</label>
      <Input.Password
        name={name}
        placeholder={_placeholder}
        iconRender={(visible) =>
          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
        }
      />
    </Form.Item>
  );
}

export default FormPassword;
