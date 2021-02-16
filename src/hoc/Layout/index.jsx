import React, { useState } from 'react';
import 'hoc/Layout/Layout.scss';
import Button from 'components/Button';
import Card from 'components/Card';
import { useSelector } from 'react-redux';
import Modal from 'components/Modal';
import Form from 'components/Form';

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cards = useSelector((state) => state.cards.list);

  return (
    <div className="layout">
      <div className="layout-main">
        <Button onClick={() => setIsOpen(true)}>Добавить желание</Button>
        <Modal onClose={() => setIsOpen(false)} isOpen={isOpen}><Form /></Modal>
        {cards.map((card) => <Card {...card} />)}
      </div>
    </div>
  );
};

export default Layout;
