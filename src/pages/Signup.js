import React from 'react';
import { Col, Row, Tabs } from 'antd';

import { Typography } from 'antd';
import DoctorsForms from '../components/DoctorsForms';
import PatientsForm from '../components/PatientsForm';
const { Title } = Typography;

const { TabPane } = Tabs;

function Signup() {
  return (
    <Row>
      <Col span={24}>
        <Row>
          <Col span={24}>
            <Title level={2}>Sign Up</Title>
          </Col>
          <Col span={24}>
            <p>Step 1</p>
            <p>
              <span>*</span>All fields are necessary
            </p>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Tabs type="card" defaultActiveKey="2">
              <TabPane tab="Sign Up as Doctor" key="1">
                <DoctorsForms />
              </TabPane>
              <TabPane tab="Sign Up as Patient" key="2">
                <PatientsForm />
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Signup;
