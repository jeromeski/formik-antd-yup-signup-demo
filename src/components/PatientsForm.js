import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { FormikDebug, Form } from 'formik-antd';
import { message, Button, Row, Col, Space } from 'antd';
import FormInput from './FormInput';
import FormDate from './FormDate';
import FormPassword from './FormPassword';
import FormSelect from './FormSelect';

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import FormPhoneNumber from './FormPhoneNumber';
import FormAreaCode from './FormAreaCode';
import FormPhone from './FormPhone';

const initialValues = {
  fname: '',
  lname: '',
  email: '',
  pword: '',
  pword2: '',
  bday: '',
  gender: '',
  phone: {
    areaCode: '',
    number: ''
  }
};

const genderOptions = [
  { key: 'male', value: 'gOption1' },
  { key: 'female', value: 'gOption2' }
];

const onSubmit = (values) => {
  console.log(values);
};

const validationSchema = Yup.object({
  fname: Yup.string().required('First name is required'),
  lname: Yup.string().required('Last name is required'),
  email: Yup.string().required('Email is required'),
  pword: Yup.string().required('Password is required'),
  pword2: Yup.string().required('Confirm Password is required'),
  bday: Yup.date().required('Birthday is required'),
  gender: Yup.array().required('Gender is required'),
  phone: Yup.object({
    number: Yup.string().required('Phone is required')
  })
});

function PatientsForm() {
  return (
    <React.Fragment>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}>
        {(formik) => {
          return (
            <Form>
              <Row span={24}>
                <Col xs={12}>
                  <Row span={24}>
                    <Col xs={12}>
                      <FormInput
                        control="input"
                        name="fname"
                        label="First name:"
                        _placeholder="Enter First Name"
                      />
                    </Col>
                    <Col xs={12}>
                      <FormInput
                        control="input"
                        type="text"
                        name="lname"
                        label="Last name:"
                        _placeholder="Enter Last Name"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={24}>
                      <FormInput
                        control="input"
                        type="email"
                        name="email"
                        label="Email:"
                        _placeholder="Enter your Email"
                      />
                    </Col>
                    <Col xs={24}>
                      <Row span={24}>
                        <Col xs={12}>
                          <FormPassword
                            control="password"
                            type="password"
                            name="pword"
                            label="Password:"
                            _placeholder="Enter Password"
                          />
                        </Col>
                        <Col xs={12}>
                          <FormPassword
                            control="password"
                            type="password"
                            name="pword2"
                            label="Confirm Password:"
                            _placeholder="Enter Confirm Password"
                          />
                        </Col>
                      </Row>
                    </Col>
                    <Col xs={24}>
                      <Row span={24}>
                        <Col xs={12}>
                          <FormDate
                            control="date"
                            name="date"
                            label="Birthday:"
                          />
                        </Col>
                        <Col xs={12}>
                          <FormSelect
                            control="gender"
                            name="gender"
                            label="Gender:"
                            options={genderOptions}
                          />
                        </Col>
                      </Row>
                      <FormPhone
                        control="phone"
                        name="phone"
                        label="Phone Number:"
                        formik={formik}
                      />
                    </Col>
                  </Row>
                </Col>
                <Col xs={12}>
                  <FormikDebug />
                </Col>
              </Row>
            </Form>
          );
        }}
      </Formik>
    </React.Fragment>
  );
}

export default PatientsForm;
