import React from 'react';
import { Form, Input } from 'formik-antd';
import { Col, Row } from 'antd';
import PhoneInput from 'react-phone-input-2';

import 'react-phone-input-2/lib/style.css';

function FormPhone(props) {
  const { name, label, _placeholder, formik, ...rest } = props;
  // console.log(name);
  // console.log(formik);
  const { setFieldValue, field } = formik;
  return (
    <Form.Item name="phone.number" {...rest}>
      <Row span={24}>
        <Col xs={24}>
          <label>{label}</label>
        </Col>
        <Col xs={4}>
          <PhoneInput
            name="name.areaCode"
            country={'ph'}
            {...field}
            onChange={(value) => setFieldValue('phone.areaCode', value)}
          />
        </Col>
        <Col xs={20}>
          <Input
            type="tel"
            name="phone.number"
            className="styles_height35 styles_delBorder"
          />
        </Col>
      </Row>
    </Form.Item>
  );
}

export default FormPhone;
