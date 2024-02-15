import React, { useState } from 'react';
import InputToggle, { InputToggleProps } from '../input-toggle';

const Example = ({
  disabled = false,
  id = 'test',
  size = 'medium',
  label = 'Label',
  displayLabel = true,
  type = 'primary'
}: InputToggleProps) => {
  const [checked, setIsChecked] = useState(false);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
      }}
    >
      <InputToggle
        checked={checked}
        type={type}
        label={label}
        displayLabel={displayLabel}
        size={size}
        disabled={disabled}
        id={id}
        onChange={(v) => setIsChecked(v)}
      />
    </div>
  );
};

export default Example;
