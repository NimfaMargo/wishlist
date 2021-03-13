import React, { useState } from 'react';
import Modal from 'components/Modal';
import Form from 'components/Form';

export default {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
};

export const Primary = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>Click to open</button>
      <Modal isOpen={isOpen} onClose={() => setOpen(false)}>
        <Form />
      </Modal>
    </>
  );
};
