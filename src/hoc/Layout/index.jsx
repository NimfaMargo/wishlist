import React, { useState } from 'react';
import 'hoc/Layout/Layout.scss';
import Button from 'components/Button';
import Card from 'components/Card';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'components/Modal';
import Form from 'components/Form';
import { hideModal, showModal } from 'reducers/modal';
import { setEditingCard, clearEditingCard, removeCard } from 'reducers/cards';
import ConfirmDialog from 'components/ComfirmDialog';

const Layout = () => {
  const dispatch = useDispatch();
  const [isOpenConfirm, setOpenConfirm] = useState(false);
  const [deletingCard, setDeletingCard] = useState(null);

  const cards = useSelector((state) => state.cards.list);
  const { isModalVisible } = useSelector((state) => state.modal);

  const handleCardEdit = (id) => {
    dispatch(setEditingCard(id));
    dispatch(showModal());
  };

  const cardRemove = () => {
    setOpenConfirm(false);
    dispatch(removeCard(deletingCard.id));
  };

  const confirmCardRemove = (card) => {
    setOpenConfirm(true);
    setDeletingCard(card);
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
        <ConfirmDialog
          onClose={() => setOpenConfirm(false)}
          isOpen={isOpenConfirm}
          onSubmit={cardRemove}
        >
          {`Вы уверены, что хотите удалить ${deletingCard?.name}?`}
        </ConfirmDialog>
        {cards.map((card) => (
          <Card
            {...card}
            onRemove={(item) => confirmCardRemove(item)}
            onEdit={(id) => handleCardEdit(id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Layout;
