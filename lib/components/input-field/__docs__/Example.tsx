import React, { useState } from 'react';
import InputField, { InputFieldProps } from '../input-field';

const Example = ({
  disabled = false,
  id = 'test',
  value = 'Value',
  placeholder = 'Placeholder',
  size = 'medium',
  label = 'Label'
}: InputFieldProps) => {
  const [val, setVal] = useState(value);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
      }}
    >
      <InputField
        label={label}
        size={size}
        disabled={disabled}
        id={id}
        onChange={(v) => setVal(v)}
        placeholder={placeholder}
        value={val}
      />
    </div>
  );
};

export default Example;
