import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { FormikDebug, Form, SubmitButton } from 'formik-antd';
import { Button, Row, Col } from 'antd';
import FormInput from './FormInput';
import FormDate from './FormDate';
import FormPassword from './FormPassword';
import FormSelect from './FormSelect';

import FormPhone from './FormPhone';
import FormCheckbox from './FormCheckbox';
import FormModal from './FormModal';

// ========== Data Start ===========

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
  },
  tos: '',
  consent: ''
};

const genderOptions = [
  { key: 'male', value: 'gOption1' },
  { key: 'female', value: 'gOption2' }
];

const validationSchema = Yup.object({
  fname: Yup.string().required('First name is required'),
  lname: Yup.string().required('Last name is required'),
  email: Yup.string().required('Email is required'),
  pword: Yup.string().required('Password is required'),
  pword2: Yup.string().required('Confirm Password is required'),
  bday: Yup.date().required('Birthday is required'),
  gender: Yup.string().required('Gender is required'),
  phone: Yup.object({
    number: Yup.string().required('Phone is required')
  })
});

const tosLabel = () => (
  <span style={{ fontSize: '12px' }}>
    I have read and accept eZConsult's{' '}
    <Button style={{ padding: '0', fontSize: '12px' }} type="link">
      Terms of service
    </Button>{' '}
    for the use of this App and the Services to be provided under the App.
  </span>
);

const consentLabel = () => (
  <span style={{ fontSize: '12px' }}>
    I consent to the collection, use, processing and disclosure of my personal
    data by eZConsult in Terms of the{' '}
    <Button style={{ padding: '0', fontSize: '12px' }} type="link">
      Privacy Policy
    </Button>{' '}
    . I Confirm that all information I provide is accurate and complete.
  </span>
);

const pwordModalData = () => (
  <div>
    <h4>Password should contain:</h4>
    <p>- minimum eight characters</p>
    <p>- one uppercase letter</p>
    <p>- one lowercase letter</p>
    <p>- one number</p>
    <p>- one special character (@$!%*?&)</p>
  </div>
);

// ========== Data End ===========

function PatientsForm() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  // formik onsubmit
  const onSubmit = (values) => {
    console.log(values);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleShowModal = () => {
    setIsModalVisible(true);
  };

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
                  <Row span={24} gutter={[16]}>
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
                      <Row span={24} gutter={[16]}>
                        <Col xs={12}>
                          <FormPassword
                            control="password"
                            type="password"
                            name="pword"
                            label="Password:"
                            _placeholder="Enter Password"
                            _showmodal={handleShowModal}
                          />
                        </Col>
                        <Col xs={12}>
                          <FormPassword
                            control="password"
                            type="password"
                            name="pword2"
                            label="Confirm Password:"
                            _placeholder="Enter Confirm Password"
                            _showmodal={handleShowModal}
                          />
                        </Col>
                      </Row>
                    </Col>
                    <Col xs={24}>
                      <Row span={24} gutter={[16]}>
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
                      <Row span={24}>
                        <Col xs={24}>
                          <FormCheckbox name="tos" label={tosLabel()} />
                        </Col>
                        <Col xs={24} style={{ marginTop: '10px' }}>
                          <FormCheckbox name="consent" label={consentLabel()} />
                        </Col>
                      </Row>
                      <Row style={{ marginTop: '10px' }}>
                        <Col xs={24}>
                          <Row span={24} justify="space-between">
                            <Col>
                              <Button type="link">Back to Login</Button>
                            </Col>
                            <Col>
                              <SubmitButton type="primary">Next</SubmitButton>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
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
      <FormModal
        isModalVisible={isModalVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
        data={pwordModalData}
      />
    </React.Fragment>
  );
}

export default PatientsForm;
