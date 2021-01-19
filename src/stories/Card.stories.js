import React from 'react';

import Card from '../components/Card';

export default {
    title: 'Components/Card',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    text: 'Букет',
    url: 'url',
    price: '10000'
};
