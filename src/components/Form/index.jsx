import React from 'react';
import { Field, Form } from 'react-final-form';
import Button from 'components/Button';
import 'components/Form/Form.scss';
import Input from 'components/Input';
import Textarea from 'components/Textarea';
import { bem } from 'utils/bem';
import { addCard } from 'reducers/cards';
import { useDispatch } from 'react-redux';
import { hideModal } from 'reducers/modal';

const cn = bem('create-form');

const WishForm = () => {
  const dispatch = useDispatch();

  const handleSubmitForm = (form) => {
    dispatch(addCard(form));
    dispatch(hideModal());
  };

  return (
    <div className={cn()}>
      <h2 className={cn('title')}>Создай свое желание</h2>
      <Form
        onSubmit={handleSubmitForm}
        render={({ handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit}>
            <Field
              name="name"
              render={({ input, meta }) => (
                <div className={cn('input')}>
                  <Input type="text" placeholder="Название" {...input} />
                  {meta.touched && meta.error && <span>{meta.error}</span>}
                </div>
              )}
            />
            <Field
              name="price"
              render={({ input, meta }) => (
                <div className={cn('input')}>
                  <Input type="text" placeholder="Цена" {...input} />
                  {meta.touched && meta.error && <span>{meta.error}</span>}
                </div>
              )}
            />
            <Field
              name="url"
              render={({ input, meta }) => (
                <div className={cn('input')}>
                  <Input type="text" placeholder="Ссылка на товар" {...input} />
                  {meta.touched && meta.error && <span>{meta.error}</span>}
                </div>
              )}
            />
            <Field
              name="comments"
              className={cn('input')}
              render={({ input, meta }) => (
                <div>
                  <Textarea type="text" placeholder="Комментарии" {...input} />
                  {meta.touched && meta.error && <span>{meta.error}</span>}
                </div>
              )}
            />
            <div className={cn('buttons')}>
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
