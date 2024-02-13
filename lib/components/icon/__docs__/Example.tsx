import React from 'react';
import Icon, { IconProps } from '../icon';

const Example = ({ name, size, color }: IconProps) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
      }}
    >
      <Icon name={name} size={size} color={color} />
    </div>
  );
};

export default Example;
