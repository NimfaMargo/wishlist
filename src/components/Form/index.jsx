import React from 'react';
import { Field, Form } from 'react-final-form';
import Button from 'components/Button';
import 'components/Form/Form.scss';
import Input from 'components/Input';
import Textarea from 'components/Textarea';
import { addCard, updateCard, clearEditingCard } from 'reducers/cards';
import { useDispatch, useSelector } from 'react-redux';
import { hideModal } from 'reducers/modal';

export const validateRequired = (required, values) => Object.fromEntries(
  required.filter((name) => !values[name]).map((name) => [name, 'Обязательное поле']),
);

const validate = (values) => validateRequired(['name'], values);

const WishForm = () => {
  const dispatch = useDispatch();
  const { editingCard } = useSelector((state) => state.cards);

  const handleSubmitForm = (form) => {
    if (editingCard) {
      dispatch(updateCard(form));
      dispatch(clearEditingCard());
    } else {
      dispatch(addCard(
        { id: Math.floor(Math.random() * 100), ...form },
      ));
    }
    dispatch(hideModal());
  };

  return (
    <div className="form">
      <h2 className="form__title">{`${editingCard ? 'Измени' : 'Создай'} желание`}</h2>
      <Form
        validate={validate}
        initialValues={{ ...editingCard }}
        onSubmit={handleSubmitForm}
        render={({ handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit}>
            <Field
              name="name"
              render={({ input, meta }) => (
                <div className="form__input">
                  <Input required type="text" placeholder="Название" {...input} />
                  {meta.touched && meta.error && <span className="form__error">{meta.error}</span>}
                </div>
              )}
            />
            <Field
              name="price"
              render={({ input, meta }) => (
                <div className="form__input">
                  <Input type="text" placeholder="Цена" {...input} />
                  {meta.touched && meta.error && <span className="form__error">{meta.error}</span>}
                </div>
              )}
            />
            <Field
              name="url"
              render={({ input, meta }) => (
                <div className="form__input">
                  <Input type="text" placeholder="Ссылка на товар" {...input} />
                  {meta.touched && meta.error && <span className="form__error">{meta.error}</span>}
                </div>
              )}
            />
            <Field
              name="comments"
              className="form__input"
              render={({ input, meta }) => (
                <div>
                  <Textarea type="text" placeholder="Комментарии" {...input} />
                  {meta.touched && meta.error && <span className="form__error">{meta.error}</span>}
                </div>
              )}
            />
            <div className="form__buttons">
              <Button
                type="submit"
                disabled={submitting}
                onClick={handleSubmit}
              >
                Сохранить
              </Button>
            </div>
          </form>
        )}
      />
    </div>
  );
};

export default WishForm;
