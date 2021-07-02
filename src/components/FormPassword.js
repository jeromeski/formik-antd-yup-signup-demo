import React from 'react';
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  InfoCircleOutlined
} from '@ant-design/icons';
import { Form, Input } from 'formik-antd';

function FormPassword(props) {
  const { name, label, _placeholder, _showmodal, ...rest } = props;
  return (
    <Form.Item name={name} {...rest}>
      <label htmlFor={name}>{label}</label>{' '}
      <InfoCircleOutlined
        style={{ fontSize: '12px', color: 'red', marginLeft: '2px' }}
        onClick={() => _showmodal()}
      />
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
