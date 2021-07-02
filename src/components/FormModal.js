import Modal from 'antd/lib/modal/Modal';
import React from 'react';

function FormModal(props) {
  const { isModalVisible, handleOk, handleCancel } = props;
  return (
    <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <h4>Password should contain:</h4>
      <p>- minimum eight characters</p>
      <p>- one uppercase letter</p>
      <p>- one lowercase letter</p>
      <p>- one number</p>
      <p>- one special character (@$!%*?&)</p>
    </Modal>
  );
}

export default FormModal;
