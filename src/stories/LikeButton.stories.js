import React from 'react';

import LikeButton from '../LikeButton';

export default {
  title: 'Training/LikeButton',
  component: LikeButton
};

const Template = (args) => <LikeButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Like',
  threshold:5
};


export const Disabled = Template.bind({});
Disabled.args = {
  title: 'Like',
  threshold:0
};

