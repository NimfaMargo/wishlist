import React, { useState } from 'react';
import Modal from 'components/Modal';

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
        <>
          <h1>Пример</h1>
          <span>
            <p>Модалка</p>
            <p>показана</p>
          </span>

        </>
      </Modal>

    </>
  );
};
