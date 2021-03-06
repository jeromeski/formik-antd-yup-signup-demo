import React from 'react';
import { Col, Row, Tabs } from 'antd';

import { Typography } from 'antd';
import PatientsForm from '../components/PatientsForm';
import DoctorsForm from '../components/DoctorsForm';
const { Title } = Typography;

const { TabPane } = Tabs;

function Signup() {
  return (
    <Row span={24} justify="center">
      <Col xs={24} md={16}>
        <Row span={24} justify="start">
          <Col xs={12}>
            <Title level={2}>Sign Up</Title>
          </Col>
        </Row>
        <Row span={24} justify="start">
          <Col xs={12}>
            <p>Step 1</p>
            <p>
              <span>*</span>All fields are necessary
            </p>
          </Col>
        </Row>
        <Tabs type="card" defaultActiveKey="2">
          <TabPane tab="Sign Up as Doctor" key="1">
            <DoctorsForm />
          </TabPane>
          <TabPane tab="Sign Up as Patient" key="2">
            <PatientsForm />
          </TabPane>
        </Tabs>
      </Col>
    </Row>
  );
}

export default Signup;
