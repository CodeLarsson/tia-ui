import React from 'react';
import Button, { ButtonProps } from '../Button';

const Example = ({
  disabled = false,
  onClick = () => {},
  primary = true,
  size = 'small',
  text = 'Button'
}: ButtonProps) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
      }}
    >
      <Button
        size={size}
        text={text}
        disabled={disabled}
        onClick={onClick}
        primary={primary}
      />
    </div>
  );
};

export default Example;
