import React from 'react';
import Input from 'components/Input';

export default {
  title: 'Components/Inputs/Input',
  component: Input,
};

const Template = (props) => <Input {...props} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'Цена',
  type: 'text',
};
