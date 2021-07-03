import React from 'react';
import { DatePicker, Form } from 'formik-antd';
// import moment from 'moment';

function FormDate(props) {
  const { name, label, ...rest } = props;
  return (
    <Form.Item name={name} {...rest}>
      <label htmlFor={name}>{label}</label>
      <DatePicker
        format={'MM/DD/YYYY'}
        name={name}
        // placeholder={moment()}
        className="styles_width100"
      />
    </Form.Item>
  );
}

export default FormDate;
