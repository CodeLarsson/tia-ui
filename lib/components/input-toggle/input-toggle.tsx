import { useEffect, useRef, useState, KeyboardEvent } from 'react';
import { generateDomID } from '../../utils';

export type InputToggleProps = {
  checked?: boolean;
  id?: string;
  onChange?: (value: boolean) => void;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  label: string;
  displayLabel?: boolean;
  type?: 'primary' | 'secondary';
  inputRef?: React.RefObject<HTMLInputElement>;
};

const InputToggle = ({
  checked = false,
  id,
  onChange,
  size = 'medium',
  disabled = false,
  label,
  displayLabel = true,
  type = 'primary',
  inputRef
}: InputToggleProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked);
  const inputElementRef = useRef<HTMLInputElement>(null);
  const toggleElementRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputElementRef.current && inputRef) {
      (inputRef as React.MutableRefObject<HTMLInputElement>).current =
        inputElementRef.current;
    }
  }, [inputElementRef, inputRef]);

  if (!id) {
    id = generateDomID();
  }

  const disabledCssClasses = 'tia-opacity-50 tia-pointer-events-none';

  const sizeClasses = {
    small: 'tia-w-small tia-h-small',
    medium: 'tia-w-medium tia-h-medium',
    large: 'tia-w-large tia-h-large'
  };

  const typeCssClasses = {
    primary: 'tia-bg-primary-500',
    secondary: 'tia-bg-white tia-border tia-border-primary-500 tia-border-solid'
  };

  const sizeClassesToggleButton = {
    small: 'tia-w-[1.75rem] tia-h-[1.75rem]',
    medium: 'tia-w-[2.5rem] tia-h-[2.5rem]',
    large: 'tia-w-[3.25rem] tia-h-[3.25rem]'
  };

  const typeClassesToggleButton = {
    primary: 'tia-bg-primary-50 focus:tia-bg-primary-200',
    secondary: 'tia-bg-primary-500 focus:tia-bg-primary-300'
  };

  const sizeClassesLabel = {
    small: 'tia-text-xs',
    medium: 'tia-text-md',
    large: 'tia-text-lg'
  };

  const handleClick = () => {
    if (!disabled) {
      const updatedChecked = !isChecked;
      setIsChecked(updatedChecked);
      onChange?.(updatedChecked);
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    const actionableKey = ['Enter', ' ', 'ArrowLeft', 'ArrowRight'];
    if (actionableKey.indexOf(event.key) > -1) {
      event.preventDefault();
      handleClick();
    }
  };

  const handleLabelClick = () => {
    toggleElementRef.current?.focus();
  };

  return (
    <div className="tia-flex tia-flex-col">
      <label
        className={
          displayLabel
            ? `tia-font-semibold tia-mx-2 tia-my-1 tia-text-gray-900 ${sizeClassesLabel[size]}`
            : 'tia-hidden'
        }
        htmlFor={id}
        onClick={handleLabelClick}
      >
        {label}
      </label>
      <div
        role="switch"
        aria-checked={isChecked}
        className={`${typeCssClasses[type]} tia-relative tia-flex tia-items-center tia-rounded-full ${sizeClasses[size]} ${disabled ? disabledCssClasses : ''}`}
      >
        <div
          ref={toggleElementRef}
          id={`${id}-toggle-button`}
          tabIndex={disabled ? undefined : 0}
          className={`tia-absolute tia-left-[2px] tia-outline-none tia-transform tia-transition-transform tia-duration-200 tia-rounded-full tia-cursor-pointer ${typeClassesToggleButton[type]} ${sizeClassesToggleButton[size]}  ${isChecked ? 'tia-translate-x-full' : ''}`}
          onClick={handleClick}
          onKeyDown={(e) => handleKeyDown(e)}
        ></div>
        <input
          ref={inputElementRef}
          aria-label={label}
          type="checkbox"
          className="tia-hidden"
          value={String(isChecked)}
          id={id}
          disabled={disabled}
          checked={isChecked}
          readOnly
        />
      </div>
    </div>
  );
};

InputToggle.displayName = 'InputToggle';
export default InputToggle;
