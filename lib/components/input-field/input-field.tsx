import { ChangeEvent, useEffect, useRef } from 'react';
import { generateDomID } from '../../utils';

export type InputFieldProps = {
  value?: string;
  label?: string;
  id?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  inputRef?: React.RefObject<HTMLInputElement>;
};

const InputField = ({
  value,
  label,
  onChange,
  id,
  placeholder,
  size = 'medium',
  disabled = false,
  inputRef,
  ...props
}: InputFieldProps) => {
  const inputElementRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputElementRef.current && inputRef) {
      (inputRef as React.MutableRefObject<HTMLInputElement>).current =
        inputElementRef.current;
    }
  }, [inputElementRef, inputRef]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  if (!id) {
    id = generateDomID();
  }

  const sizeClassesInput = {
    small:
      'tia-p-2 tia-rounded-lg tia-border-2 tia-m-2 tia-outline-primary-600 tia-text-xs',
    medium:
      'tia-p-4 tia-rounded-lg tia-border-2 tia-m-2 tia-outline-primary-600 tia-text-md',
    large:
      'tia-p-4 tia-rounded-lg tia-border-2 tia-m-2 tia-outline-primary-600 tia-text-lg'
  };

  const sizeClassesLabel = {
    small: 'tia-text-xs',
    medium: 'tia-text-md',
    large: 'tia-text-lg'
  };

  const disabledCssClasses = {
    small: 'tia-opacity-50',
    medium: 'tia-opacity-50',
    large: 'tia-opacity-50'
  };

  return (
    <div className="tia-flex tia-flex-col">
      <label
        className={`tia-font-semibold tia-mx-2 tia-my-1 tia-text-gray-900 ${sizeClassesLabel[size]}`}
        htmlFor={id}
      >
        {label}
      </label>
      <input
        ref={inputElementRef}
        value={value}
        className={`${disabled ? disabledCssClasses[size] : ''} ${sizeClassesInput[size]}`}
        id={id}
        placeholder={placeholder}
        disabled={disabled}
        {...props}
        onChange={(event) => handleInputChange(event)}
      />
    </div>
  );
};

InputField.displayName = 'InputField';
export default InputField;
