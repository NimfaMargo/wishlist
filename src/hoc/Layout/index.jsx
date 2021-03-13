import React from 'react';
import 'hoc/Layout/Layout.scss';
import Button from 'components/Button';
import Card from 'components/Card';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'components/Modal';
import Form from 'components/Form';
import { hideModal, showModal } from 'reducers/modal';
import { setEditingCard, clearEditingCard } from 'reducers/cards';

const Layout = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cards.list);
  const { isModalVisible } = useSelector((state) => state.modal);

  const handleCardEdit = (id) => {
    dispatch(setEditingCard(id));
    dispatch(showModal());
  };

  const handleModalClose = () => {
    dispatch(clearEditingCard());
    dispatch(hideModal());
  };

  return (
    <div className="layout">
      <div className="layout-main">
        <Button onClick={() => dispatch(showModal())}>Добавить желание</Button>
        <Modal onClose={handleModalClose} isOpen={isModalVisible}><Form /></Modal>
        {cards.map((card) => <Card {...card} onEdit={(id) => handleCardEdit(id)} />)}
      </div>
    </div>
  );
};

export default Layout;
