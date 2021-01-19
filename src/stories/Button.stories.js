import React from 'react';

import Button from '../components/Button';

export default {
  title: 'Components/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Добавить желание',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Неактивная кнопка',
  disabled: true,
};
