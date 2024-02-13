import { MouseEventHandler } from 'react';

export type ButtonProps = {
  text?: string;
  size?: 'small' | 'medium' | 'large';
  primary?: boolean;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button = ({
  disabled,
  onClick,
  primary,
  size,
  text,
  ...props
}: ButtonProps) => {
  const smallStyles = 'tia-text-xs tia-px-3 tia-py-2';
  const mediumStyles = 'tia-text-md tia-px-6 tia-py-3';
  const largeStyles = 'tia-text-base tia-px-6 tia-py-4';

  const baseBtnStyles = `tia-rounded-full tia-border ${
    primary
      ? 'tia-bg-primary-500 tia-text-white tia-border-primary-700 tia-shadow-md'
      : 'tia-bg-white tia-text-primary-500 tia-border-primary-500 tia-shadow-sm'
  }`;

  const enabledStyles = `tia-cursor-pointer ${
    primary
      ? 'hover:tia-bg-primary-600 hover:tia-shadow-lg transform transition-transform hover:tia-scale-105'
      : 'hover:tia-bg-primary-50 hover:tia-shadow-md transform transition-transform hover:tia-scale-105'
  }`;

  const disabledBtnStyles = 'tia-opacity-50';

  const btnStyles = {
    small: `${smallStyles} ${baseBtnStyles} ${disabled ? disabledBtnStyles : enabledStyles}`,
    medium: `${mediumStyles} ${baseBtnStyles} ${disabled ? disabledBtnStyles : enabledStyles}`,
    large: `${largeStyles} ${baseBtnStyles} ${disabled ? disabledBtnStyles : enabledStyles}`
  };

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
      {...props}
      className={`${btnStyles[size ?? 'medium']} ${disabled ? disabledBtnStyles : ''}`}
    >
      {text}
    </button>
  );
};

Button.displayName = 'Button';
export default Button;
