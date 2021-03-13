import React from 'react';
import 'hoc/Layout/Layout.scss';
import Button from 'components/Button';
import Card from 'components/Card';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'components/Modal';
import Form from 'components/Form';
import { hideModal, showModal } from 'reducers/modal';

const Layout = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cards.list);
  const { isModalVisible } = useSelector((state) => state.modal);

  return (
    <div className="layout">
      <div className="layout-main">
        <Button onClick={() => dispatch(showModal())}>Добавить желание</Button>
        <Modal onClose={() => dispatch(hideModal())} isOpen={isModalVisible}><Form /></Modal>
        {cards.map((card) => <Card {...card} />)}
      </div>
    </div>
  );
};

export default Layout;
