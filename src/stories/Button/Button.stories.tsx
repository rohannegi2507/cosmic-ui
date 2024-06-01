// Button.stories.tsx
import React from 'react';
import Button from '../../components/Button/Button';

export default {
  title: 'Button',
  component: Button,
};

export const Primary = () => <Button label="Primary Button" />;
export const Secondary = () => <Button label="Secondary Button" />;
